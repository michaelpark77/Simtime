import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ST_BLUE, TEXT_ACTIVE } from "../Colors";
import StyledText from "./text/Header";

const Wrap = styled.div`
  border: solid 1px red;
  display: inline-block;
`;
const Bottom = styled.div`
  background-color: ${ST_BLUE};
  height: 3px;
  width: 64px;
`;
const StyledContent = styled(StyledText)`
  border: solid 1px blue;
  font-weight: 1000;
`;

function MenuActive() {
  return (
    <Wrap>
      <StyledContent type="h3">Clendar</StyledContent>
      <Bottom />
    </Wrap>
  );
}

export default MenuActive;
