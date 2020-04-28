import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MAIN_COLOR, ST_GTAY } from "../../Colors";
import ProgressBar from "../../A-Atomics/Deco/ProgressBar";
import ModalTitle from "../../A-Atomics/Modal/ModalTitle";

const Wrap = styled.div`
  border: solid 1px ${MAIN_COLOR};
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  justify-content: ;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 100%;
    height: 568px;
  }
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

const FormWrap = styled.div`
  width: 92%;
  height: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border: solid 1px red;
`;

function EventMaker(props) {
  return (
    <Wrap {...props}>
      <BarWrap>
        <ProgressBar />
      </BarWrap>
      <ModalTitle>EVENT</ModalTitle>
      <FormWrap></FormWrap>
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
