import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ST_BLUE, ST_WHITE, TEXT_ACTIVE, TEXT_INACTIVE } from "../Colors";
import StyledText from "./text/Header";

const Wrap = styled.div`
  // border: solid 1px red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  ${(props) => (props.width ? `width : ${props.width}px` : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  background-color: ${ST_WHITE};
  border-radius: 80px 80px 20px 20px;
  height: 5px;
  width: 64px;
`;

const StyledContent = styled(StyledText)`
  color: ${TEXT_INACTIVE};
  font-weight: bold;
  &:hover {
    color: ${TEXT_ACTIVE};
  }
`;

function MenuInActive(props) {
  return (
    <Wrap>
      <ContentWrap>
        <StyledContent type="h3" color={TEXT_INACTIVE}>
          {props.children}
        </StyledContent>
        <Bottom />
      </ContentWrap>
    </Wrap>
  );
}

export default MenuInActive;
