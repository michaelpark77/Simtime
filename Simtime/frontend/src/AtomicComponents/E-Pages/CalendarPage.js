import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Calendar from "../D-Templates/Calendar/Calendar";
import DashedButton from "../A-Atomics/Button/DashedButton";
import Detail from "../D-Templates/Event/EventDetail";
import EventMaker from "../D-Templates/Event/EventMaker";
import Filter from "../C-Organisms/Filter";

import Modal from "../A-Atomics/Modal/Modal";
import ModalPortal from "../A-Atomics/Modal/ModalPortal";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 920px) {
    width: 100%;
    flex-direction: column;
  }

  overflow: hidden;
`;

const LeftWrap = styled.div`
  width: 68.5%;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;
const RightWrap = styled.div`
  width: 31%;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;
const StyledFilter = styled(Filter)`
  margin-bottom: 8px;
`;

const StyledCalendar = styled(Calendar)``;

const StyledDashedButton = styled(DashedButton)`
  margin-bottom: 8px;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

const StyledDetail = styled(Detail)`
  @media only screen and (max-width: 920px) {
    height: 100%;
  }
`;

function CalendarPage() {
  const [isModalOpen, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const next = () => {
    alert("hello");
  };

  useEffect(() => {});

  return (
    <Wrap>
      <ModalPortal
        children={
          <Modal onClose={handleCloseModal}>
            <EventMaker />
          </Modal>
        }
      ></ModalPortal>
      <LeftWrap>
        <StyledFilter />
        <StyledCalendar height="98%" />
      </LeftWrap>
      <RightWrap>
        <StyledDashedButton
          onClick={() => {
            handleOpenModal(true);
          }}
        />
        <StyledDetail height="98%" />
      </RightWrap>

      {isModalOpen && (
        <ModalPortal
          children={
            <Modal onClose={handleCloseModal}>
              <EventMaker />
            </Modal>
          }
        ></ModalPortal>
      )}
    </Wrap>
  );
}

export default CalendarPage;
