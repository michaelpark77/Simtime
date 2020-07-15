import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import 'babel-polyfill';
import { connect } from "react-redux";
import { MAIN_COLOR } from "../../../Colors";
import { createRelationship,addToGroup } from "../../../../actions/friends";

import SelectBoxRef from "../../../A-Atomics/Filter/SelectBoxRef";
import DefaultModal from "../../../B-Molecules/Modal/DefaultModal";
import Input from "../../../B-Molecules/Form/Input"
import Search from "../../../B-Molecules/Filter/Search";
import ResultTable from "../../../C-Organisms/Friends/AddFriend/ResultTable";

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px ${MAIN_COLOR};
  margin-bottom: 15px;
`;

const StyledSelectBox = styled(SelectBoxRef)``;
const StyledSearch = styled(Search)`
  margin-left: 5px;
`;

const ResultWrap = styled.div`
  width: 100%;
`;

const StyledInput = styled(Input)`
  padding-bottom: 15px;
`

const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function AddGroup(props) {
  const [groupname, setGroupName] = useState(null);

  const handleChange = useCallback((e) => {
    setGroupName(e.target.value);
  });

  // const handleSubmit = async () => {
  //   try {
  //     const relationship = await props.createRelationship({account: props.user.id, friend: friend[0]})
  //     console.log(relationship)
  //     const group = await props.addToGroup({relationship: relationship.data.id, group: 1 })
  //     console.log(group)
  //   }catch (err) {
  //     console.log("relationshipError" , err);
  //   }
  // };

  const renderChild = () => {
    return (
      <Fragment>
        <StyledInput
        label="Name"
        name="GroupName"
        desc="Group Name"
        value={groupname}
        onChange={handleChange}
        height="55px"
        />
        <SearchWrap>
          <StyledSelectBox
            options={["Username", "E-mail", "Phone"]}
            defaultOption="Username"
            width="102px"
          ></StyledSelectBox>
          <StyledSearch width="auto" desc="Find a friend" height="25px" />
        </SearchWrap>
        <ResultWrap>
          <Result
            datas={props.resultData}
            title="Result"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={7}
            onSelect={(res) => {
              setFriend(res);
            }}
          ></Result>
        </ResultWrap>
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
});
// export default AddGroup;
export default connect(mapStateToProps, { createRelationship, addToGroup })(AddGroup);

AddGroup.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddGroup.defaultProps = {
  height: "520px",
  width: "320px",
  resultData: [
    {
      id: 3,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      name: "ara",
    },
    {
      id: 4,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
      name: "arara",
    },
    {
      id: 19,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
      name: "aasa",
    },
    {
      id: 7,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      name: "ara2",
    },
    {
      id: 5,
      image_url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
      name: "admin",
    },
  ],
};
