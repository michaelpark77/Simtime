import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CalDate from "../../A-Atomics/Calendar/CalDate";
import {
  MAIN_COLOR,
  BG_INACTIVE,
  BG_WHITE,
  ST_YELLOW_LIGHT,
} from "../../Colors";

const size = "38.34px";

const Wrap = styled.div`
  width: ${size};
  height: ${size};
  border-radius: ${size};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: ${(props) => (props.isActive ? BG_WHITE : BG_INACTIVE)};
  // ${(props) =>
    props.isToday ? `background-color: ${ST_YELLOW_LIGHT}` : ""};

  @media only screen and (max-width: 920px) {
    width: 14.8%;
    margin-right: 2px;
    margin-bottom: 2px;
    ${(props) => (props.day == 0 ? "margin-left: 2px;" : "")};
  }

  // border: solid 1px blue;
`;

const MyCalDate = styled(CalDate)``;

function Date(props) {
  const { year, month, day, date, isActive, isActiveMonth } = props;
  const contentHeight = size;

  return (
    <Wrap {...props}>
      <MyCalDate
        isActive={isActive}
        isActiveMonth={isActiveMonth}
        date={date}
        day={day}
        contentHeight={contentHeight}
      >
        {date}
      </MyCalDate>
    </Wrap>
  );
}

export default Date;

Date.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.number,
  isActive: PropTypes.bool,
  isActiveMonth: PropTypes.bool,
  isToday: PropTypes.bool,
};

Date.defaultProps = {
  date: "30",
};
