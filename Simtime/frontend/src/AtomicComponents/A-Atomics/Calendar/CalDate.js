import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Paragraph from "../text/Paragraph";

const Wrap = styled.div`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  //   background-color: white;
`;

const TextWrap = styled.div`
  height: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;
`;

const Text = styled(Paragraph)`
  font-weight: bold;
  font-size: 12px;
  line-height: ${(props) => props.height};
  vertical-align: center;
`;

function CalDate(props) {
  return (
    <div>
      <Wrap {...props}>
        <TextWrap>
          <Text {...props}>{props.children}</Text>
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
  height: "16px",
};
