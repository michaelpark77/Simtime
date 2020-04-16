import React from "react";
import PropTypes from "prop-types";
import Day from "../../B-Molecules/Calendar/Day";
import Week from "../../C-Organisms/Calendar/Week";
import { connect } from "react-redux";

// cal_prev_page = [0]; -현재(오늘)로부터 과거로 load한 page
// cal_next_pate = [0]; -현재(오늘)로부터 미래로 load한 page

// 날짜 계산
function dateDiff(date, num) {
  const resDate = new Date();
  resDate.setDate(date.getDate() + num);
  console.log(
    (resDate.getMonth() + 1).toString() + resDate.getDate().toString()
  );

  return resDate;
}

//달력 일자 생성
function generate(startDate, endDate, currMonth) {
  var dates = [];
  var strDates = [];
  var weekDate = [];
  var weekStrDate = [];
  var curr = startDate;

  while (curr < endDate) {
    //week별로
    weekDate.push(curr);
    weekStrDate.push([
      `${curr.getFullYear().toString()}-${(
        curr.getMonth() + 1
      ).toString()}-${curr.getDate().toString()}`, //"2020-4-15"
      curr.getDay(), // 0~6
      currMonth == curr.getMonth() + 1, // true or false
      curr.getDate().toString(), // "15"
    ]);

    curr.setDate(curr.getDate() + 1);

    if (curr.getDay() == 0) {
      dates.push(weekDate);
      strDates.push(weekStrDate);

      weekDate = [];
      weekStrDate = [];
    }
  }

  return strDates;
}

function Calendar(props) {
  const { currDate } = props;
  const weekDay = currDate.getDay();
  const startDate = dateDiff(currDate, weekDay * -1);
  const endDate = dateDiff(currDate, 28 + 6 - weekDay); // 4weeks
  const dates = generate(startDate, endDate, 4); //["2020-4-12", 0, false, "12" ] [날짜, day(요일), isActive, date]

  const renderWeeks = () => {
    return <Week date={dates}> </Week>;
  };

  // const renderRows = () => {
  //   return tableDatas.map((row, index) => {
  //     return (
  //       <TableRow
  //         key={tableDatas[index].id}
  //         id={tableDatas[index].id}
  //         columnWidths={columnWidths}
  //         columnAligns={columnAligns}
  //         textTypes={textTypes}
  //         datas={tableDatas[index].datas}
  //       ></TableRow>
  //     );
  //   });
  // };

  return <div></div>;
}

export default Calendar;

// const mapStateToProps = (state) => ({
//   events: state.events.events,
// });

// export default connect(mapStateToProps, {})(Calendar);

Calendar.propTypes = {};

Calendar.defaultProps = {
  currDate: new Date(),
};
