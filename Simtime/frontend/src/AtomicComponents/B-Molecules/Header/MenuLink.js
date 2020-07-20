import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//component
import { MAIN_COLOR, ST_GRAY } from "../../Colors";
import MenuActive from "../../A-Atomics/Menu/MenuActive";
import MenuInActive from "../../A-Atomics/Menu/MenuInActive";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function MenuLink(props) {

  const {src, num, handleClick} = props;

  return (
    <StyledLink to={src} onClick={(e)=>handleClick(e, num)}>
      {props.children}
    </StyledLink>
  );
}

export default MenuLink;
