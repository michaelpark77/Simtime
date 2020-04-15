import React from "react";
import PropTypes from "prop-types";
// import * AS WEEK from "../../../C-Organisms/Calendar/Week";
import { connect } from "react-redux";

// cal_prev_page = [0]; -현재(오늘)로부터 과거로 load한 page
// cal_next_pate = [0]; -현재(오늘)로부터 미래로 load한 page

function Calendar(props) {
  const today = new Date("2020-04-15");
  const d1 = today.getDate();
  const dateDiff = () => {
    //28일치 통째로 가져오기
    const curr = new Date();
    curr.setDate(props.currDate.getDate() + 28);
    return (curr.getMonth() + 1).toString() + curr.getDate().toString();
  };

  console.log(dateDiff());
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
