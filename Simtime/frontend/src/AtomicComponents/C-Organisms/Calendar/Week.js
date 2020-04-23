import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Day from "../../B-Molecules/Calendar/Day";

const height = "116px";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${height};
  width: 100%;
  margin-bottom: 4px;

`;


function Week(props) {
  const { weekDates } = props;


  const renderDays = () => {
    return weekDates.map((date, index) => {
      return (
        <Day
          key={date.id}
          strDate={date.strDate}
          day={date.day}
          date={date.date}
          isActive={date.isActive}
          isToday={date.id=="0D"}
          height={height}
        ></Day>
      );
    });
  };

  // const renderDays = () => {
  //   return dates.map((week, index) => {
  //     return (
  //       <Week key={week.id} id={week.id} dates={week.weekDates}/>
  //     );
  //   });
  // };

  // return (
  //   <Wrap {...props}>
  //     <Day height={height} day={0} date="29" isActive={false} />
  //     <Day height={height} day={1} date="30" isActive={false} />
  //     <Day height={height} day={2} date="31" isActive={false} />
  //     <Day height={height} day={3} date="1" isActive={true} />
  //     <Day height={height} day={4} date="2" isActive={true} />
  //     <Day height={height} day={5} date="3" isActive={true} />
  //     <Day height={height} day={6} date="4" isActive={true} />
  //   </Wrap>
  // );
  return (
    <Wrap {...props}>
      {renderDays()}
    </Wrap>
  )

}

export default Week;

Week.propTypes = {};

Week.defaultProps = {};
