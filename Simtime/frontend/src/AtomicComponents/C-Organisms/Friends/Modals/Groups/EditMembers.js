import React, { useState, Fragment, createRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";

import ButtonWithImage from "../../../../B-Molecules/Button/ButtonWithImage";

import AddMembers from "./AddMembers";

import Table from "../../../../B-Molecules/Table/Table";
import TabTable from "../../../../B-Molecules/Table/TabTable";
import MemberList from "../../Lists/MemberList";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import Paragraph from "../../../../A-Atomics/Font/Paragraph";

import { MAIN_COLOR } from "../../../../Colors";
import { deleteMemebers } from "../../../../../actions/groups";

const Wrap = styled.div`
  width: 100%;
`;

const GroupImage = styled.div`
  height: 150px;
`


const StyledTable = styled(Table)`

  & .btn-with-image{
    border: solid 1px ${MAIN_COLOR};
    padding : 0px 5px 0px 5px;
    box-shadow: 1px 1px 4px 0px #9d9d9d;
  }

  @keyframes addToclose {
    0% {
      transform: rotateZ(0deg) scale(1); 
    }

    50%{
      transform: rotateZ(0deg) scale(1.2);       
     }

    100% {
      transform: rotateZ(45deg) scale(1);  
    }
  }

  & .btn-icon {
    ${(props) =>
      props.addPage
        ? `
        animation-duration: 1s;
        animation-name: addToclose;
        animation-fill-mode: forwards;
      `
        : `
        // animation-duration: 2s;
        // animation-name: closeToadd;
        // animation-fill-mode: forwards;
      `}
  }
`;

function EditMembers(props) {
  const [users, setUsers] = useState([]);
  const [addPage, setAddPage] = useState(false);
  const [selectedMembers, setselectedMembers] = useState([]);
  const [button, setbutton] = useState({
    content: "Add",
    url:
      "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
  });

  const friends = props.selectedGroup.members.reduce(
    (acc, item) => [
      ...acc,
      {
        id: item.RGmapId,
        relationshipId: item.relationship.id, //relationshipid
        friendId: item.relationship.friend.id,
        username: item.relationship.friend.username,
        profile_image: item.relationship.friend.profile_image,
      },
    ],
    []
  );

  console.log(friends);

  const renderChild = () => {
    return (
      <Fragment>
        <Wrap>
          <GroupImage>

          </GroupImage>

          <TabTable
            title="Members"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={6}
            handleAddBtnClick={() => {
              setbutton({ ...button, content: addPage ? "Add" : "Back" });
              setAddPage(!addPage);
            }}
            addButton
            button={button}
            addPage={addPage}
          >
            {addPage ? (
              <AddMembers btnClickHandler={() => setAddPage(!addPage)} />
            ) : (
              <MemberList datas={friends}></MemberList>
            )}
            </TabTable>
        </Wrap>
      </Fragment>
    );
  };

  return (
    <DefaultModal
      title={props.selectedGroup.group.groupname}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="500px"
    >
      {renderChild()}
    </DefaultModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});
// export default AddGroup;
export default connect(mapStateToProps, { deleteMemebers })(EditMembers);
