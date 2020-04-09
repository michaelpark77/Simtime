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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;
function CalWrap(props) {
  return <Wrap {...props} />;
}

export default CalWrap;
