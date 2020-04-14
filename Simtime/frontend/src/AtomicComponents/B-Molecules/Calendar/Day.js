import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CalContent from "../../A-Atomics/Calendar/CalContent";
import CalDate from "../../A-Atomics/Calendar/CalDate";
import { BG_INACTIVE, BG_WHITE } from "../../Colors";

const Wrap = styled.div`
  width: 84px;
  height: 100%;
  margin-right: 4px;
  margin-bottom: 4px;
  ${(props) => (props.numOfDay % 7 == 0 ? "margin-left: 4px;" : "")};
  background-color: ${(props) => (props.isActive ? BG_WHITE : BG_INACTIVE)};
  overflow: auto;

  @media only screen and (max-width: 920px) {
    width: 14.8%;
  }
`;

function Day(props) {
  const contentHeight = (
    parseInt(props.height.replace(/[^0-9]/g, "")) / 7
  ).toFixed(2);

  return (
    <Wrap {...props}>
      <CalDate contentHeight={contentHeight} {...props}>
        {props.date}
      </CalDate>
      <CalContent contentHeight={contentHeight} {...props}>
        1
      </CalContent>
      <CalContent contentHeight={contentHeight} {...props}>
        2
      </CalContent>
      <CalContent contentHeight={contentHeight} {...props}>
        3
      </CalContent>
      <CalContent contentHeight={contentHeight} {...props}>
        4
      </CalContent>
      <CalContent contentHeight={contentHeight} {...props}>
        5
      </CalContent>
      <CalContent contentHeight={contentHeight} {...props}>
        6
      </CalContent>
    </Wrap>
  );
}

export default Day;

Day.propTypes = {
  height: PropTypes.string,
  date: PropTypes.string.isRequired,
  numOfDay: PropTypes.number,
  isActive: PropTypes.bool,
};

Day.defaultProps = {
  date: "30",
};
