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
  background-size: 610px;
  background-image: url("static/img/months/4.png");
  background-position: center center;
  width: 620px;
  height: 668px;
  z-index: 99


  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  border: solid 1px blue;


  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;

function CalWrap(props) {
  return <Wrap {...props}></Wrap>;
}

export default CalWrap;
