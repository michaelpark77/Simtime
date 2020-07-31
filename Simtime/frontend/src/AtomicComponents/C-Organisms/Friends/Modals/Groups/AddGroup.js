import React, { Fragment, useState, useCallback, createRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MAIN_COLOR, ST_GREEN, ST_RED } from "../../../../Colors";
import { createGroup } from "../../../../../actions/groups";
import { addToGroup } from "../../../../../actions/friends";

import InputWrap from "../../../../A-Atomics/Form/InputWrap";
import Paragraph from "../../../../A-Atomics/Font/Paragraph";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import ResultTable from "../../ResultTable";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";

const StyledInput = styled(InputWrap)`
  padding-bottom: 15px;
`;

const ResultWrap = styled.div`
  width: 100%;
`;

const StyledSearchBar = styled(SearchBar)``;
const ArrowParagraph = styled(Paragraph)`
  cursor: pointer;
  padding-bottom: 10px;
`;

const Result = styled(ResultTable)``;

function AddGroup(props) {
  const [groupname, setGroupName] = useState(null);
  const [addMembers, setAddMembers] = useState(false);

  const [friendDatas, setFriendDatas] = useState([
    ...new Set(
      props.friends.map((it) => {
        return { relationshipId: it.id, ...it.friend };
      })
    ),
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isValid, setIsValid] = useState(null);
  const inputRef = createRef(null);

  const checkValidation = (groupname) => {
    inputRef.current.classList.remove("valid-value", "invalid-value");
    if (groupname != "") {
      let res = !props.groups.some((group) => group.groupname === groupname);
      //valid state 저장
      setIsValid(res);
      //css 적용
      if (res) inputRef.current.classList.add("valid-value");
      else inputRef.current.classList.add("invalid-value");
      // inputRef.current.style.backgroundColor = "red";
    }
  };

  const handleChange = useCallback((e) => {
    let value = e.target.value;
    checkValidation(value);
    setGroupName(value);
  });

  const handleSubmit = async () => {
    if (isValid) {
      try {
        const group = await props.createGroup({
          account: props.user.id,
          groupname: groupname,
        });

        if (selectedMembers.length > 0) {
          // var filtered = props.friends.filter((friend) =>
          //   selectedMembers.some((friendId) => friendId == friend.friend.id)
          // );
          let filtered = props.friends.reduce(
            (acc, friend) => ({ ...acc, [friend.friend.id]: friend }),
            {}
          );
          var mambersTogroup = [
            ...new Set(
              selectedMembers.map((id) => {
                return { relationship: filtered[id].id, group: group.id };
              })
            ),
          ];
          await props.addToGroup(mambersTogroup);
        }
        props.onClose();
      } catch (err) {
        console.log("relationshipError", err);
      }
    } else {
      inputRef.current.focus();
    }
  };

  //친구 내에서 검색
  const filterFriend = (field, keyword) => {
    var filtered = props.friends.filter((item) =>
      item.friend[field].includes(keyword)
    );

    var res = [
      ...new Set(
        filtered.map((item) => {
          return { relationshipId: item.id, ...item.friend };
        })
      ),
    ];

    setFriendDatas(res);
  };

  const renderAddMember = () => {
    return (
      <Fragment>
        <StyledSearchBar
          search={(field, keyword) => filterFriend(field, keyword)}
        />
        <ResultWrap>
          <Result
            datas={friendDatas}
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={6}
            onSelect={(res) => {
              setSelectedMembers(res);
            }}
            multiple
          ></Result>
        </ResultWrap>
      </Fragment>
    );
  };

  const renderChild = () => {
    return (
      <Fragment>
        <StyledInput
          height="55px"
          label="Name"
          name="GroupName"
          desc="Group Name"
          onChange={handleChange}
          enterHandler={handleSubmit}
          ref={inputRef}
        />
        {addMembers ? (
          <ArrowParagraph
            fontSize="14px"
            color="MAIN_COLOR"
            onClick={() => setAddMembers(false)}
          >
            {" "}
            ▲ Hide{" "}
          </ArrowParagraph>
        ) : (
          <ArrowParagraph
            fontSize="14px"
            color="MAIN_COLOR"
            onClick={() => setAddMembers(true)}
          >
            {" "}
            ▼ Add Members?{" "}
          </ArrowParagraph>
        )}
        {addMembers ? renderAddMember() : null}
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title="Add Group"
      children={renderChild()}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="auto"
    ></DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups,
  friends: state.friends.friends,
});
// export default AddGroup;
export default connect(mapStateToProps, { createGroup, addToGroup })(AddGroup);

AddGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddGroup.defaultProps = {
  height: "520px",
  width: "320px",
};
