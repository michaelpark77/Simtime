import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styled from "styled-components";
import Week from "../../C-Organisms/Calendar/Week";
import Paragraph from "../../A-Atomics/Font/Paragraph";
import Image from "../../A-Atomics/Image";
import { addDate, generate } from "./Generator";
import { MAIN_COLOR, ST_SEMI_GRAY } from "../../Colors";

// cal_prev_page = [0]; -현재(오늘)로부터 과거로 load한 page
// cal_next_pate = [0]; -현재(오늘)로부터 미래로 load한 page

const Wrap = styled.div`
  width: 286px;
  height: 360px;
  padding-top: 5px;
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
  border: solid 1px ${MAIN_COLOR};
  border-radius: 6px;
`;

const MonthWrap = styled.div`
  width: 100%;
  height: 36px;

  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
`;

const Arrow = styled(Image)`
  opacity: 0.75;
`;

const Month = styled(Paragraph)`
  font-weight: 500;
`;

const DayWrap = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
  border-bottom: dashed 1px ${ST_SEMI_GRAY};
`;

const CalendarWrap = styled.div`
  width: 100%;
  height: 260px;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;
`;

function DatePicker(props) {
  const [currDate, setCurrDate] = useState(props.currDate);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  var firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1); // 넘겨받은 달의 1일
  var lastDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0); // 넘겨받은 달의 말일
  var weekDay = firstDay.getDay();
  var offset = 7 - parseInt((lastDay.getDate() + weekDay) % 7);

  var startDate = addDate(firstDay, weekDay * -1);
  var endDate = addDate(lastDay, offset < 7 ? offset : 0);
  var dates = generate(startDate, endDate, currDate); // res=>["2020-4-12", 0, false, "12" ] [날짜, day(요일), isActive, date]

  console.log(dates);
  console.log(weekDay);
  console.log(currDate);

  //요일
  const renderDay = () => {
    return days.map((day, index) => {
      return (
        <Paragraph key={day} color="ST_GRAY">
          {day}
        </Paragraph>
      );
    });
  };

  //일자
  const renderWeek = () => {
    return dates.map((week, index) => {
      return (
        <Week
          key={week.id}
          id={week.id}
          isDatePicker={true}
          weekDates={week.weekDates}
        />
      );
    });
  };

  return (
    <Wrap>
      <MonthWrap>
        <Arrow
          width="10px"
          height="10px"
          src="static/img/icons/left-arrow.png"
        />
        <Month fontSize="14px" color="TEXT">
          May 2020
        </Month>
        <Arrow
          width="10px"
          height="10px"
          src="static/img/icons/right-arrow.png"
          onClick={() => setCurrDate(addDate(currDate, lastDay.getDate()))}
        />
      </MonthWrap>
      <DayWrap>{renderDay()}</DayWrap>
      <CalendarWrap>{renderWeek()}</CalendarWrap>
    </Wrap>
  );
}

export default DatePicker;

DatePicker.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  selectedDate: PropTypes.string,
};

DatePicker.defaultProps = {
  currDate: new Date(),
  height: "98%",
  width: "98%",
  selectedDate: "0D", //context로 해보자
};
