import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Paragraph from "../text/Paragraph";

const Wrap = styled.div`
  height: ${(props) => props.contentHeight}px
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border: solid 1px blue;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;
`;

const Text = styled(Paragraph)`
  font-weight: bold;
  font-size: 12px;
  line-height: ${(props) => props.contentHeight}px
  vertical-align: center;
`;

function CalDate(props) {
  return (
    <div>
      <Wrap>
        <TextWrap>
          <Text>{props.children}</Text>
        </TextWrap>
      </Wrap>
    </div>
  );
}

export default CalDate;

CalDate.propTypes = {
  height: PropTypes.string,
};

CalDate.defaultProps = {
  height: "120px",
};
