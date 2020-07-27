import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ColoredButton from "../../../../A-Atomics/Button/ColoredButton";
import SelectedItem from "../../../../A-Atomics/Filter/SelectedItem";
import Paragraph from "../../../../A-Atomics/Font/Paragraph";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";

import { MAIN_COLOR } from "../../../../Colors";
import { addToGroup } from "../../../../../actions/groups";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const SearchWrap = styled.div`
  width: 100%;
`;

const ResultWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;

`;
const Result = styled(ResultTable)`

`

const Button = styled(ColoredButton)`
  margin-bottom: 5px;
  `


const MyItem = styled(SelectedItem)`
  height: 20px;
  white-space: nowrap;
`;


function AddMembers(props) {
  const [friends, setFriends] = useState([]);
  const users = [
    { id: 92, username: "ara", profile_image: "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png"},
    { id: 93, username: "arara", profile_image: "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png" },
    { id: 94, username: "aa", profile_image: "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png" },
    { id: 95, username: "ara2", profile_image: "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png" },
    { id: 96, username: "admin", profile_image: "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png" },

  ];

  const clickEvent = async (e) => {
    e.preventDefault();
    var group = props.selectedGroup.group.id
    try {
      console.log(friends)
      var data = friends.map((friend) => {
        return { relationship: friend, group: group };
      });
      props.addToGroup(data);
      console.log(data)
    } catch (err) {
      console.log("addToGroupError", err);
      }
  };



  return (
    <Wrap>
      <SearchWrap>
          <SearchBar newFriends search={(users) => setUsers(users)} />
      </SearchWrap>
      <ResultWrap>
        <Result
          multiple
          datas={users}
          width="100%"
          rowNum={5}
          selectHandler={(res) => {setFriends(res);}}
          />
      </ResultWrap>
      
      <Button onClick={(e)=>clickEvent(e)}>Done</Button>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});

export default connect(mapStateToProps, { addToGroup })(AddMembers);
