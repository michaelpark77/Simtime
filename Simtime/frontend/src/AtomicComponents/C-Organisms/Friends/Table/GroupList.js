import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { deleteGroup, getGroup } from "../../../../actions/groups";


import TableRow from "../../../A-Atomics/Table/TableRow";
import Paragraph from "../../../A-Atomics/Font/Paragraph";
import UserCardForList from "../../../B-Molecules/User/UserCardForList";
import ButtonWithImage from "../../../B-Molecules/Button/ButtonWithImage";

import Modal from "../../../A-Atomics/Modal/Modal";
import ModalPortal from "../../../A-Atomics/Modal/ModalPortal";

const buttonMargin = 10;
const buttonsWidth = 160 + 8; //"삭제"-26px, "수신차단" or 차단-52 , bittonMargin * 버튼수 => 26 +104 + 30
const buttonDefaultSize = 13 * 4 + 2; //4글자기준

const Wrap = styled.div``

const UserCard = styled(UserCardForList)`
  cursor: pointer;
`;

const Buttons = styled.div`
  width: ${buttonsWidth}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonWrap = styled.div`
  ${(props) => (props.width ? "width: " + props.width : "")};
`;

const TextButton = styled(Paragraph)`
  // border: solid 1px red;
  margin-left: ${buttonMargin}px;
  cursor: pointer;
`;

const StyledButtonWithImage = styled(ButtonWithImage)`
  // border: solid 1px red;
  margin-left: ${buttonMargin}px;
`;


function GroupList(props) {

  const [isModalOpen, setIsOpenModal] = useState(false);
  const [targetModal, setTargetModal] = useState("group"); //group, members

  const handleOpenModal = (target) => {
    setTargetModal(target);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  
  const clickEvent=(e, id, cb)=>{
    e.preventDefault();
    setIsOpenModal(true);
    cb(id)
  }

  const renderButton = useCallback((content = "삭제", id, fn, color="TEXT_LINK") => {
    return (
      <ButtonWrap>
        <TextButton color={color} type="button" onClick={e=>clickEvent(e, id, fn)}>
          {content}
        </TextButton>
      </ButtonWrap>
    );},[]);

  const renderRows = (groups) => {
    return groups.map((group, index) => {
      return (
        <TableRow rowNum={index} key={group.id}>
          <UserCard
            username={group.groupname}
            imageSize="32px"
            // url={group.profile_image}
            url="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/group_basic.png"
          ></UserCard>
          <Buttons>
            {renderButton("이름변경", group.id, props.getGroup)}
            {renderButton("멤버관리")}
            {renderButton("삭제",group.id, props.deleteGroup, "TEXT_WARNING")}
          </Buttons>
        </TableRow>
      );
    });
  };

  return (<Wrap>
    {renderRows(props.datas)}
    {isModalOpen && (
          <ModalPortal
            children={
              <Modal onClose={handleCloseModal}>
                {targetModal == "group" ? <div>group</div> : <div>member</div>}
              </Modal>
            }
          ></ModalPortal>
      )}
  </Wrap>);
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups

});
// export default AddGroup;
export default connect(mapStateToProps, { deleteGroup, getGroup })(GroupList);

GroupList.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  datas: PropTypes.array,
};

GroupList.defaultProps = {
  title: "Table Title",
  headers: null,
  // datas: null,
  datas: null
};


