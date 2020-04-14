import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  BG_WHITE,
  BG_INACTIVE,
  BG_INACTIVE_LIGHT,
  MAIN_COLOR,
} from "../../Colors";
import Paragraph from "../text/Paragraph";

const Wrap = styled.div`
  background-color: ${BG_INACTIVE_LIGHT};
  width: 620px;
  height: 668px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  border: solid 1px blue;

  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;

const Month = styled.div`
  color: rgba(242, 201, 76, 0.09);
  border: solid 1px red;
  font-size: 590px;
  height: 590px;
  line-height: 500px;
`;

function CalWrap(props) {
  return (
    <div>
      <Wrap {...props}></Wrap>
      <Month>4</Month>
    </div>
  );
}

export default CalWrap;
