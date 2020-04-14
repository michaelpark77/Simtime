import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Day from "../../../B-Molecules/Calendar/Day";

const height = "116px";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: ${height};
  margin-bottom: 4px;
`;

function Week(props) {
  return (
    <Wrap {...props}>
      <Day height={height} date="30" isActive={false} />
      <Day height={height} date="31" isActive={false} />
      <Day height={height} date="1" isActive={false} />
      <Day height={height} date="2" isActive={true} />
      <Day height={height} date="3" isActive={true} />
      <Day height={height} date="4" isActive={true} />
      <Day height={height} date="5" isActive={true} />
    </Wrap>
  );
}

export default Week;

Week.propTypes = {};

Week.defaultProps = {};
