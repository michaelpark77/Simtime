import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";

import ButtonWithImage from "../../../../B-Molecules/Button/ButtonWithImage";
import Table from "../../../../B-Molecules/Table/Table";
import MemberList from "../../Lists/MemberList";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import Paragraph from "../../../../A-Atomics/Font/Paragraph";
import { MAIN_COLOR } from "../../../../Colors";
import { deleteMemebers } from "../../../../../actions/groups";

const AddButtonWrap = styled.div`
  box-shadow: 1px 1px 4px 0px #9d9d9d;
`;

const AddButton = styled(ButtonWithImage)`
  & > img {
    transform: rotateZ(45deg);
  }
`;

const AddMemberWrap = styled.div`
  width: 100%
  height: auto;
  box-shadow: 1px 1px 4px 0px #9d9d9d;
  border: solid 1px ${MAIN_COLOR};
`;

const SearchWrap = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;
const ResultWrap = styled.div`
  width: 100%;
`;
const Result = styled(ResultTable)``;

const TextButton = styled(Paragraph)`
  cursor: pointer;
  text-align: right;
`;

function AddMembers(props) {
  const renderButton = (button) => {
    return (
      <AddButton
        height="20px"
        width="auto"
        onClick={() => props.btnClickHandler()}
      >
        back
      </AddButton>
    );
  };

  const users = [
    { id: 0, username: "test1", profile_image: "" },
    { id: 1, username: "test2", profile_image: "" },
    { id: 2, username: "test3", profile_image: "" },
  ];

  const renderChild = () => {
    return (
      <AddMemberWrap>
        {/* <AddButtonWrap>{renderButton()}</AddButtonWrap> */}
        <SearchWrap>
          <SearchBar newFriends search={(users) => setUsers(users)} />
        </SearchWrap>
        <ResultWrap>
          <Result
            datas={users}
            title="Result"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={3}
            selectHandler={(res) => {
              setFriend(res);
            }}
          />
        </ResultWrap>
      </AddMemberWrap>
    );
  };

  return <div>{renderChild()}</div>;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});

export default connect(mapStateToProps, { deleteMemebers })(AddMembers);
