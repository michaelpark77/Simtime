import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createRelationship } from "../../../../actions/events";

import DefaultModal from "../../../B-Molecules/Modal/DefaultModal";
import SelectBoxRef from "../../../A-Atomics/Filter/SelectBoxRef";
import Search from "../../../B-Molecules/Filter/Search";
import ResultTable from "../../../C-Organisms/Friends/AddFriend/ResultTable";
import { MAIN_COLOR } from "../../../Colors";


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
  margin-bottom: 10px;
`;
const Result = styled(ResultTable)``;
const Groups = styled(ResultTable)``;

function AddFriend(props) {
  const [friend, setFriend] = useState(null);
  const [groups, setGroups] = useState([]);

  const handleSubmit = () => {
    console.log("요기", {account: props.user.id,friend: friend});

    createRelationship({ account: props.user.id, friend: friend})
  };

  const renderChild = () => {
    return (
      <Fragment>
        <SearchWrap>
          <StyledSelectBox
            options={["Username", "E-mail", "Phone"]}
            defaultOption="Username"
            width="102px"
          ></StyledSelectBox>
          <StyledSearch width="auto" desc="Find a friend" height="25px"  />
        </SearchWrap>

        <ResultWrap>
          <Result
            datas={props.resultData}
            title="Result"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={3}
            onSelect={(res) => {
              setFriend(res);
            }}
          ></Result>
        </ResultWrap>

        <ResultWrap>
          <Groups
            datas={props.resultData}
            title="Group"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={3}
            onSelect={(res) => {
              setGroups(res);
            }}
            multiple
          ></Groups>
        </ResultWrap>
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title="Add Friend"
      children={renderChild()}
      totalPage={0}
      handleSubmit={()=>handleSubmit()}
    ></DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
// export default AddFriend;
export default connect(mapStateToProps,{createRelationship})(AddFriend);

AddFriend.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

AddFriend.defaultProps = {
  height: "548px",
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
