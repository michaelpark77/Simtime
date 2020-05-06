import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CalContent from "../../A-Atomics/Calendar/CalContent";
import CalDate from "../../A-Atomics/Calendar/CalDate";
import { MAIN_COLOR, BG_INACTIVE, BG_WHITE } from "../../Colors";

const Wrap = styled.div`
  width: 13.5%;
  height: 100%;

  background-color: ${(props) => (props.isActive ? BG_WHITE : BG_INACTIVE)}95;
  ${(props) => (props.isToday ? `background-color: ${MAIN_COLOR}95` : "")};

  overflow: hidden;

  @media only screen and (max-width: 920px) {
    width: 14.8%;
    margin-right: 2px;
    margin-bottom: 2px;
    ${(props) => (props.day == 0 ? "margin-left: 2px;" : "")};
  }
`;

const DateWrap = styled.div`
  height: ${(props) => props.contentHeight}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const MyCalDate = styled(CalDate)`
  margin-right: 4px;
  ${(props) => (props.date == "1" ? `text-decoration: underline;` : "")}
`;

function Day(props) {
  const { year, month, day, date } = props;
  const contentHeight = (
    parseInt(props.height.replace(/[^0-9]/g, "")) / 7
  ).toFixed(2);

  return (
    <Wrap {...props}>
      <DateWrap contentHeight={contentHeight}>
        <MyCalDate date={date} day={day} contentHeight={contentHeight}>
          {date == "1" ? `${month}/1` : date}
        </MyCalDate>
      </DateWrap>

      {/* <CalContent contentHeight={contentHeight} >
        1
      </CalContent>
      <CalContent contentHeight={contentHeight} >
        2
      </CalContent>
      <CalContent contentHeight={contentHeight} >
        3
      </CalContent>
      <CalContent contentHeight={contentHeight}>
        4
      </CalContent>
      <CalContent contentHeight={contentHeight} >
        5
      </CalContent>
      <CalContent contentHeight={contentHeight} >
        6
      </CalContent> */}
    </Wrap>
  );
}

export default Day;

Day.propTypes = {
  height: PropTypes.string,
  date: PropTypes.string.isRequired,
  numOfDay: PropTypes.number,
  isActive: PropTypes.bool,
  isToday: PropTypes.bool,
};

Day.defaultProps = {
  date: "30",
};
