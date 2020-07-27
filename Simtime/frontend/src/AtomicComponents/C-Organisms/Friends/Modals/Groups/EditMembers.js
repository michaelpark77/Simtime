import React, { useState, Fragment, createRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";

import ButtonWithImage from "../../../../B-Molecules/Button/ButtonWithImage";

import AddMembers from "./AddMembers";

import TabTable from "../../../../B-Molecules/Table/TabTable";
import MemberList from "../../Lists/MemberList";
import BasicModal from "../../../../B-Molecules/Modal/BasicModal";

import { MAIN_COLOR } from "../../../../Colors";
import { deleteMemebers } from "../../../../../actions/groups";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const GroupImage = styled.div`
  width: 100%;
  height: 25%;
`;

const Table = styled.div`
  width: 100%;
  height: 75%;
`;

function EditMembers(props) {
  const [users, setUsers] = useState([]);
  const [addPage, setAddPage] = useState(false);
  const [selectedMembers, setselectedMembers] = useState([]);

  const buttons = [
    {
      content: "Members",
      url: null,
    },
    {
      content: "Add",
      url:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
    },
  ];

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

  return (
    <BasicModal
      title={props.selectedGroup.group.groupname}
      totalPage={0}
      handleSubmit={() => handleSubmit()}
      height="500px"
    >
      <Wrap className="EditMembersWrap">
        <GroupImage></GroupImage>
        <TabTable buttons={buttons}>
          {addPage ? (
            <AddMembers btnClickHandler={() => setAddPage(!addPage)} />
          ) : (
            <MemberList datas={friends}></MemberList>
          )}
        </TabTable>
      </Wrap>
    </BasicModal>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  selectedGroup: state.groups.selectedGroup,
});
// export default AddGroup;
export default connect(mapStateToProps, { deleteMemebers })(EditMembers);
