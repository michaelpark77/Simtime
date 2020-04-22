import React from "react";
import styled from "styled-components";

import { MAIN_COLOR, ST_GRAY } from "../Colors";
import LOGO from "../A-Atomics/Logo";
import MenuActive from "../A-Atomics/MenuActive";
import MenuInActive from "../A-Atomics/MenuInActive";
import Account from "../B-Molecules/User/Account";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px ${ST_GRAY};

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
  // border: solid 1px blue;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  width: 300px;
`;

const AccountWrap = styled.div`
  // border: solid 1px blue;
  width: 180px;

  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 560px) {
    display: none;
  }
`;

function Header() {
  return (
    <Wrap>
      <ContentWrap>

        <LogoWrap>
          <LOGO />
        </LogoWrap>

        <MenuList>
          <MenuActive>Calendar</MenuActive>
          <MenuInActive>My Simtime</MenuInActive>
          <MenuInActive>Friends</MenuInActive>
        </MenuList>

        <AccountWrap>
          <Account />
        </AccountWrap>

      </ContentWrap>
    </Wrap>
  );
}

export default Header;