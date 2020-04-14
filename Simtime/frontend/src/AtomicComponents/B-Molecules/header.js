import React from "react";
import styled from "styled-components";

import { MAIN_COLOR } from "../Colors";
import LOGO from "../A-Atomics/Logo";
import MenuActive from "../A-Atomics/MenuActive";
import MenuInActive from "../A-Atomics/MenuInActive";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${MAIN_COLOR};
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: solid 1px red;

  @media only screen and (max-width: 680px) {
    justify-content: space-around;
  }

  @media only screen and (max-width: 560px) {
    justify-content: center;
  }
`;

const LogoWrap = styled.div`
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

const MenuList = styled.div`
  border: solid 1px blue;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 300px;
`;

const Account = styled.div`
  border: solid 1px blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  @media only screen and (max-width: 560px) {
    display: none;
  }
`;

function Header() {
  return (
    <Wrap>
      <Line />
      <ContentWrap>
        <LogoWrap>
          <LOGO />
        </LogoWrap>
        <MenuList>
          <MenuActive>Calendar</MenuActive>
          <MenuInActive>My Simtime</MenuInActive>
          <MenuInActive>Friends</MenuInActive>
        </MenuList>

        <Account></Account>
      </ContentWrap>
    </Wrap>
  );
}

export default Header;