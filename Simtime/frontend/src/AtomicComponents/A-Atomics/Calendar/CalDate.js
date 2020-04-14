import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paragraph from "../text/Paragraph";
import { ST_BLUE, ST_RE } from "../../Colors";

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
`;

function CalDate(props) {
  return (
    <div>
      <Wrap contentHeight={props.contentHeight}>
        <Text contentHeight={props.contentHeight}>{props.children}</Text>
      </Wrap>
    </div>
  );
}

export default CalDate;

CalDate.propTypes = {
  contentHeight: PropTypes.string,
};

CalDate.defaultProps = {
  contentHeight: "120px",
};
