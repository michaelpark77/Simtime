import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MAIN_COLOR, ST_GTAY } from "../../Colors";

import ModalTitle from "../../A-Atomics/Modal/ModalTitle";
import ProgressBar from "../../A-Atomics/Deco/ProgressBar";

import Input from "../../B-Molecules/Form/Input";
import TagInput from "../../B-Molecules/Form/TagInput";
import DatePicker from "../../D-Templates/Calendar/DatePicker";

import DashedButton from "../../A-Atomics/Button/DashedButton";

const Wrap = styled.div`
  border: solid 1px ${MAIN_COLOR};
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 100%;
    height: 568px;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

const BarWrap = styled.div`
  width: 92%;
  height: 10%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 90%;
  height: 82%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FormWrap = styled.form`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MyInput = styled(Input)`
  margin-bottom: 15px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function EventMaker(props) {
  return (
    <Wrap {...props}>
      <HeaderWrap>
        <BarWrap>
          <ProgressBar />
        </BarWrap>
        <ModalTitle>EVENT</ModalTitle>
      </HeaderWrap>

      <ContentWrap>
        <FormWrap>
          <MyInput name="Event" desc="Event Name" />
          <MyInput name="Date" desc="2020/05/04" />
          <DatePicker></DatePicker>
          {/* <MyInput name="Time" desc="PM 07:00" />
          <TagInput></TagInput> */}
        </FormWrap>

        <ButtonWrap>
          <DashedButton>NEXT</DashedButton>
        </ButtonWrap>
      </ContentWrap>
    </Wrap>
  );
}

export default EventMaker;

EventMaker.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

EventMaker.defaultProps = {
  height: "568px",
  width: "320px",
};