import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ST_YELLOW } from "../Colors";
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
      <Content type="h1" color={ST_YELLOW}>
        SimTime
      </Content>
    </Wrap>
  );
}

export default LOGO;
