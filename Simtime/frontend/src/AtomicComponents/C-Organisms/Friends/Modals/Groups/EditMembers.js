import React, { useState, Fragment, createRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../../../C-Organisms/Friends/SearchFriend/SearchBar";
import ResultTable from "../../ResultTable";

import ButtonWithImage from "../../../../B-Molecules/Button/ButtonWithImage";

import AddMembers from "./AddMembers";

import Table from "../../../../B-Molecules/Table/Table";
import MemberList from "../../Lists/MemberList";
import DefaultModal from "../../../../B-Molecules/Modal/DefaultModal";
import Paragraph from "../../../../A-Atomics/Font/Paragraph";

import { MAIN_COLOR } from "../../../../Colors";
import { deleteMemebers } from "../../../../../actions/groups";

const Wrap = styled.div`
  width: 100%;
`;

//   ${(props) =>
//     props.addPage
//       ? ""
//       : "display: none"}// -moz-box-shadow: 0 0 5px 3px #9d9d9d;
//   // -webkit-box-shadow: 0 0 3px 5px #9d9d9d;
//   //box-shadow: 3px 3px 5px -3px #9d9d9d
//

// const AddButtonWrap = styled.div`
//   box-shadow: 1px 1px 4px 0px #9d9d9d;
// `;

// const AddButton = styled(ButtonWithImage)``;

// const AddMemberWrap = styled.div`
//   width: 100%
//   height: auto;
//   box-shadow: 1px 1px 4px 0px #9d9d9d;
//   border: solid 1px ${MAIN_COLOR};
// `;

// const SearchWrap = styled.div`
//   width: 100%;
//   padding-bottom: 15px;
// `;
// const ResultWrap = styled.div`
//   width: 100%;
// `;
// const Result = styled(ResultTable)``;

// const TextButton = styled(Paragraph)`
//   cursor: pointer;
//   text-align: right;
// `;

// @keyframes btnRotation {
//   from {
//     transform: rotateZ(0deg);
//   }
//   to {
//     transform: rotateZ(45deg);
//   }
// }
// & .btn-with-image{
//   animation-duration: 2s;
//   animation-name: btnRotation;
//   }

const StyledTable = styled(Table)`
  @keyframes addToclose {
    0% {
      transform: rotateZ(0deg) scale(1);
    }

    50% {
      transform: rotateZ(0deg) scale(3);
    }

    100% {
      transform: rotateZ(45deg) scale(1);
    }
  }

  @keyframes closeToadd {
    from {
      transform: rotateZ(45deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

  & .btn-with-image {
    ${(props) =>
      props.addPage
        ? `
        animation-duration: 1.5s;
        animation-name: addToclose;
        animation-fill-mode: forwards;
      `
        : `
        
        animation-duration: 2s;
        animation-name: closeToadd;
        animation-fill-mode: forwards;
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
          {/* <Result
            datas={friends}
            addButton={true}
            title="Members"
            titleColor="MAIN_COLOR"
            width="100%"
            rowNum={7}
            handleAddBtnClick={() => {
              setAddPage(!addPage);
            }}
            selectHandler={(res) => {
              setselectedMembers(res);
            }}
            multiple
          />
          <TextButton
            type="button"
            color="ST_RED"
            onClick={(e) => {
              e.preventDefault();
              console.log(selectedMembers);
              props.deleteMemebers(selectedMembers);
            }}
          >
            그룹에서 제거
          </TextButton> */}
          <StyledTable
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
            {/* <MemberList datas={friends}></MemberList> */}
          </StyledTable>
          {/* </Wrap> */}
          {/* <Wrap addPage={addPage}>
          <AddMembers btnClickHandler={() => setAddPage(!addPage)} /> */}
          {/* </Wrap> */}
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
