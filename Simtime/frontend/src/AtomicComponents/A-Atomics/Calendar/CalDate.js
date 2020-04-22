import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paragraph from "../Font/Paragraph";
import { MAIN_COLOR,TEXT, ST_BLUE, ST_RED } from "../../Colors";

const Wrap = styled.div`
  height: ${(props) => props.contentHeight}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Text = styled(Paragraph)`
  font-weight: bold;
  line-height: ${(props) => props.contentHeight}px;
  margin-right: 4px;
  ${(props) => props.date == "1"? `text-decoration: underline;` : "" }
`;

function CalDate(props) {
  const {date, day, contentHeight} = props;

  const color = (day) => {
    if (day == 0) return "ST_RED";
    else if (day == 6) return "ST_BLUE";
    else return "TEXT";
  };

  return (
    <div>
      <Wrap contentHeight={props.contentHeight}>
        <Text date = {date} color={color(day)} contentHeight={contentHeight}>
          {props.children}
        </Text>
      </Wrap>
    </div>
  );
}

export default CalDate;

CalDate.propTypes = {
  contentHeight: PropTypes.string,
  day: PropTypes.number,
};

CalDate.defaultProps = {
  contentHeight: "120px",
  day: 0,
};
