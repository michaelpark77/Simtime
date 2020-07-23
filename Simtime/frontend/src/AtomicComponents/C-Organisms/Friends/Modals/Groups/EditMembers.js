import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import Paragraph from "../../../../A-Atomics/Font/Paragraph"

import { deleteMemebers } from "../../../../../actions/groups";

const Wrap = styled.div`
  width: 100%;
  ${props=>props.addPage? "" : "display: none"}
`;

const SearchWrap = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;
const ResultWrap = styled.div`
  width: 100%;
`;
const Result = styled(ResultTable)`
`;

const TextButton = styled(Paragraph)`
  cursor: pointer;
  text-align: right;
`;

function EditMembers(props) {
  const [users, setUsers] = useState([]);
  const [addPage, setAddPage] = useState(false);
    //   const filtered = props.selectedGroup.members.reduce(
  //     (acc, friend) => ({ ...acc, [friend.friend.id]: friend }),
  //     {}
  //   );

  const friends = [
    ...new Set(
      props.selectedGroup.members.map((item) => {
        return { relationshipId: item.id, ...item.friend };
      })
    ),
  ];

  console.log(friends)

  const renderChild = () => {
    return(
      <Fragment>
        <Wrap addPage={!addPage}>
          <Result 
            addButton={true}
            title="Members" 
            titleColor="MAIN_COLOR" 
            width="100%"
            rowNum={7}
            handleAddBtnClick ={()=>{setAddPage(!addPage)}}
            selectHandler={(res) => {console.log(res)}}
            datas={friends}
            multiple 
            />
            <TextButton 
              type='button' 
              color="ST_RED" 
              onClick={(e) => {
                  e.preventDefault();
                  fn();}}
            >그룹에서 제거</TextButton>
        </Wrap>
        <Wrap addPage={addPage}>
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
        </Wrap>
       </Fragment>
    );
  }

  return (
    <DefaultModal
      title={props.selectedGroup.group.groupname}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="500px"
    >{renderChild()}</DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});
// export default AddGroup;
export default connect(mapStateToProps, {deleteMemebers})(EditMembers);
