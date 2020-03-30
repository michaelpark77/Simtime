import React from "react";
import styled from "styled-components";
import { addEvent, getEvent } from "../../actions/events";
import { connect } from "react-redux";

const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrap = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
`;

const Modal = ({ contents, onClose }) => {
  return (
    <MyModal>
      <ContentWrap>
        {contents}
        <button onClick={onClose}>닫기</button>
      </ContentWrap>
    </MyModal>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  events: state.events
});

//후에 친구 목록 getFriends 만들어야함!
export default connect(mapStateToProps, { addEvent, getEvent })(Modal);
