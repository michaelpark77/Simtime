import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "../Font/Header";
import * as Colors from "../../Colors";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => Colors[props.color]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

function ModalTitle(props) {
  return (
    <Wrap {...props}>
      <Header type="h2" color="ST_WHITE">
        {props.children}
      </Header>
    </Wrap>
  );
}

export default ModalTitle;

ModalTitle.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};

ModalTitle.defaultProps = {
  height: "32px",
  width: "100%",
  color: "MAIN_COLOR",
};
