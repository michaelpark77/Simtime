import React from "react";
import styled from "styled-components";

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

const CloseBtn = styled.button`
  background: white;
`;

const Modal = ({ contents, onClose }) => {
  return (
    <MyModal>
      <ContentWrap>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <h3>모달달달</h3>
        <p>모달입니다. 반갑습니다.</p>
        {contents}
      </ContentWrap>
    </MyModal>
  );
};

export default Modal;
