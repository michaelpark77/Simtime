import React from "react";
import PropTypes from "prop-types";
import Week from "../../C-Organisms/Calendar/Week";
import { connect } from "react-redux";

// cal_prev_page = [0]; -현재(오늘)로부터 과거로 load한 page
// cal_next_pate = [0]; -현재(오늘)로부터 미래로 load한 page

// 날짜 계산
function addDate(date, num) {
  const resDate = new Date();
  resDate.setDate(date.getDate() + num);
  // console.log(
  //   (resDate.getMonth() + 1).toString() + resDate.getDate().toString()
  // );

  return resDate;
}

//date1-date2
function subDate(date1, date2) {
  return parseInt(parseInt(date1-date2) / 1000 / 60 / 60 / 24 * -1);
}

//date1-date2
function subWeek(date1, date2) {
  return  parseInt(subDate(date1, date2) / 7 );
}

//달력 일자 생성
function generate(startDate, endDate, currMonth) {
  var today = new Date();
  var curr = startDate;

  //한 주차씩 담기용
  var weekDates_orgin = [];
  var weekDates = [];

  //최종 배열
  var dates_origin = [];
  var dates = [];
  
  while (curr < endDate) {
    //week별 저장
    weekDates_orgin.push({id: `${subDate(today, curr)}D`, day: curr} );

    weekDates.push({
      id: `${subDate(today, curr)}D`,
      strDate: `${curr.getFullYear().toString()}-${(
        curr.getMonth() + 1
      ).toString()}-${curr.getDate().toString()}`, //"2020-4-15"

      day: curr.getDay(), // 0~6
      // isActive: currMonth == curr.getMonth() + 1, // true or false
      isActive : (curr > today),
      date: curr.getDate().toString(), // "15"
      });
 

    //다음날 저장  
    curr.setDate(curr.getDate() + 1);

    if (curr.getDay() == 0) {
      dates_origin.push({id: `${subWeek(today, curr)}W`, weekDates: weekDates_orgin} );
      dates.push({id: `${subWeek(today, curr)}W`, weekDates: weekDates});
      weekDates_orgin = [];
      weekDates = [];
    }
  }
   console.log(dates)
  return dates;
}



function Calendar(props) {
  const { currDate } = props;
  const weekDay = currDate.getDay();
  const startDate = addDate(currDate, weekDay * -1);
  const endDate = addDate(currDate, 35 + 6 - weekDay); // 5weeks
  const dates = generate(startDate, endDate, 4); //["2020-4-12", 0, false, "12" ] [날짜, day(요일), isActive, date]

  const renderWeek = () => {
    return dates.map((week, index) => {
      return (
        <Week key={week.id} id={week.id} weekDates={week.weekDates}/>
      );
    });
  };

  return (
    <div>
      {renderWeek()}
    </div>
    );
}

export default Calendar;

// const mapStateToProps = (state) => ({s
//   events: state.events.events,
// });

// export default connect(mapStateToProps, {})(Calendar);

Calendar.propTypes = {};

Calendar.defaultProps = {
  currDate: new Date(),
};
