import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { MAIN_COLOR, ST_GRAY } from "../../Colors";
import LOGO from "../../A-Atomics/Logo";
import MenuLink from "../../B-Molecules/Header/MenuLink"

const LogoWrap = styled.div`
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

function Logo(props) {
  return (<LogoWrap>
            <MenuLink src="/" handleClick={e=>handleClick(e, 0)}>
                <LOGO />
            </MenuLink>
        </LogoWrap>)
}

export default Logo;

