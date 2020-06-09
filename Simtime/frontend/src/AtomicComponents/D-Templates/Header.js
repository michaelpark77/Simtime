import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MAIN_COLOR, ST_GRAY } from "../Colors";
import LOGO from "../A-Atomics/Logo";
import MenuActive from "../A-Atomics/Header/MenuActive";
import MenuInActive from "../A-Atomics/Header/MenuInActive";
import Account from "../B-Molecules/User/Account";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;
  @media only screen and (max-width: 680px) {
    margin-bottom: 0px;
  }
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
    height: 40px;
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
  width: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 560px) {
    display: none;
  }
`;

function Header(props) {
  const { isAuthenticated, user } = props.auth;

  return (
    <Wrap>
      <ContentWrap>
        <LogoWrap>
          <LOGO />
        </LogoWrap>

        <MenuList>
          <MenuActive>CALENDAR</MenuActive>
          <MenuInActive>MY SIMTIME</MenuInActive>
          <MenuInActive>FRIENDS</MenuInActive>
        </MenuList>

        <AccountWrap>
          <Account username={user ? user.username : "unknown"} />
        </AccountWrap>
      </ContentWrap>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Header);

// export default connect(mapStateToProps, { logout });
