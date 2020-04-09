import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paragraph from "../text/Paragraph";
import * as Colors from "../../Colors";

const Wrap = styled.div`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${(props) => (props.isConfirmed ? `background-color: ${props.color}` : "")};
  border : solid 1px ${(props) => props.color}}
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
  font-size: 13px;
  line-height: ${(props) => props.height};
  vertical-align: center;
  color: ${(props) => (props.isConfirmed ? Colors.ST_WHITE : props.color)};
`;

function CalContent(props) {
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

export default CalContent;

CalContent.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  isConfirmed: PropTypes.bool, //evnet확정여부
  isHost: PropTypes.bool,
  isParticipated: PropTypes.bool, //참석여부
};

CalContent.defaultProps = {
  height: "16px",
  color: Colors.ST_PINK,
  isConfirmed: false,
  isHost: false,
  isParticipated: false,
};
