import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Day from "../../B-Molecules/Calendar/Day";
import Date from "../../B-Molecules/DatePicker/Date";

const height = "116px";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => (props.isDatePicker ? "center" : "flex-start")};
  ${(props) => (props.isDatePicker ? "100%" : height)};
  height: ${(props) => (props.isDatePicker ? "100%" : height)};
  width: 100%;
  margin-bottom: ${(props) => (props.isDatePicker ? "0px" : "4px")};
  // border: solid 1px red;
`;

function Week(props) {
  const { weekDates, isDatePicker } = props;

  const renderDays = () => {
    return weekDates.map((date, index) => {
      return (
        <Day
          key={date.id}
          strDate={date.strDate}
          year={date.year}
          month={date.month}
          day={date.day}
          date={date.date}
          isActive={date.isActive}
          isToday={date.id == "0D"}
          height={height}
        ></Day>
      );
    });
  };

  const renderDates = () => {
    return weekDates.map((date, index) => {
      return (
        <Date
          key={date.id}
          strDate={date.strDate}
          year={date.year}
          month={date.month}
          day={date.day}
          date={date.date}
          isActive={date.isActive}
          isActiveMonth={date.isActiveMonth}
          isToday={date.id == "0D"}
          height={height}
        />
      );
    });
  };

  return <Wrap {...props}>{isDatePicker ? renderDates() : renderDays()}</Wrap>;
}

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array,
  isDatePicker: PropTypes.bool,
};

Week.defaultProps = {
  weekDates: [],
  isDatePicker: false,
};
