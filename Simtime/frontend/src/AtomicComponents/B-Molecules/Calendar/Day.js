import React from "react";
import PropTypes from "prop-types";

import CalContent from "../../A-Atomics/Calendar/CalContent";
import CalDate from "../../A-Atomics/Calendar/CalDate";
import CalDay from "../../A-Atomics/Calendar/CalDay";

function Day(props) {
  return (
    <CalDay {...props}>
      <CalDate>{props.date}</CalDate>
      <CalContent height="32px">1</CalContent>
      <CalContent>2</CalContent>
      <CalContent>3</CalContent>
      <CalContent>4</CalContent>
      <CalContent>5</CalContent>
      <CalContent>6</CalContent>
    </CalDay>
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
  height: "16px",
};
