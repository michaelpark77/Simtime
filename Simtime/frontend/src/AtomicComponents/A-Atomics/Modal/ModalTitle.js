import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


import { ModalContext } from "../../../contexts/modalContext";
import Header from "../Font/Header";
import CloseButton from "../Button/CloseButton"
import * as Colors from "../../Colors";

const Wrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => Colors[props.color]};
  display: inline-box;
  position: relative;
  padding-left: 10px;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  right: 5px;
  top: 5px;
`

function ModalTitle(props) {
  const { closeModal } = React.useContext(ModalContext);
  return (
    <Wrap {...props}>
      <Header type="h2" color="ST_WHITE">
        {props.children}
      </Header>
      <StyledCloseButton onClick={()=>closeModal()} />
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
  height: "36px",
  width: "100%",
  color: "MAIN_COLOR",
};
