import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_WHITE, BG_INACTIVE, BG_INACTIVE_LIGHT } from "../../Colors";
import Paragraph from "../text/Paragraph";

const Day = styled.div`
  width: 84px;
  height: 112px;
  margin-right: 4px;
  margin-bottom: 4px;
  ${(props) => (props.numOfDay % 7 == 0 ? "margin-left: 4px;" : "")};
  background-color: ${(props) => (props.isActive ? BG_WHITE : BG_INACTIVE)};
  overflow: auto;
`;

function CalDay(props) {
  // console.log(props.numOfDay % 7);
  return <Day {...props} />;
}

export default CalDay;
