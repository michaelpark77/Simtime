import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_WHITE, BG_INACTIVE, BG_INACTIVE_LIGHT } from "../../Colors";
import Paragraph from "../text/Paragraph";

const Wrap = styled.div`
  background-color: ${BG_INACTIVE_LIGHT};
  width: 620px;
  height: 668px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;
function CalWrap(props) {
  return <Wrap {...props} />;
}

export default CalWrap;
