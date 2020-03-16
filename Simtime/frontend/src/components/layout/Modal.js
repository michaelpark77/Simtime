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

const Contents = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
`;

const Modal = ({ onClose }) => {
  return (
    <MyModal>
      <Contents>
        <h3>모달달달</h3>
        <p>모달입니다. 반갑습니다.</p>
        <button onClick={onClose}>닫기</button>
      </Contents>
    </MyModal>
  );
};

export default Modal;
