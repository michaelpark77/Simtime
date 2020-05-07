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

const size = "32px";

const Wrap = styled.div`
  width: ${size};
  height: ${size};
  border-radius: ${size};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  ${(props) => (props.isToday ? `background-color: ${ST_YELLOW_LIGHT}` : null)};

  &:hover {
    ${(props) => (props.isActive ? `background-color: ${MAIN_COLOR}` : null)};
  }

  // @media only screen and (max-width: 920px) {
  //   margin-right: 2px;
  //   margin-bottom: 2px;
  //   ${(props) => (props.day == 0 ? "margin-left: 2px;" : "")};
  // }

  // border: solid 1px blue;
`;

const MyCalDate = styled(CalDate)`
  font-size: 12px;
  font-weight: 500;
`;

function Date(props) {
  const { day, date, isActive, isActiveMonth, isToday } = props;
  const contentHeight = size;

  return (
    <Wrap {...props}>
      <MyCalDate
        isActive={isActive}
        isActiveMonth={isActiveMonth}
        isToday={isToday}
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
