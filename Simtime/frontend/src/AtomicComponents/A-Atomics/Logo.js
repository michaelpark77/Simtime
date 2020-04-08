import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { MAIN_COLOR } from "../Colors";
import H from "./text/Header";

const Wrap = styled.div`
  // border: solid 1px red;
  display: inline-block;
  vertical-align: middle;
`;

const Content = styled(H)`
  font-weight: bold;
`;

function LOGO() {
  return (
    <Wrap>
      <Content type="h1" color={MAIN_COLOR}>
        SimTime
      </Content>
    </Wrap>
  );
}

export default LOGO;
