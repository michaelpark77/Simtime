import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//context
import { MenuContext } from "../../../contexts/menuContext";

//component
import { MAIN_COLOR, ST_GRAY } from "../../Colors";
import MenuActive from "../../A-Atomics/Menu/MenuActive";
import MenuInActive from "../../A-Atomics/Menu/MenuInActive";
import MenuLink from "../../B-Molecules/Header/MenuLink";

const Wrap = styled.div`
  // border: solid 1px blue;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  width: 300px;
// `;

function MenuList(props) {
  const { menus, activeMenu, handleMenu } = useContext(MenuContext);

  const handleClick = (e, num) => {
    console.log(num)
    handleMenu(num);
  };
  
  const ActiveMenuRender = (name) => {
    return <MenuActive>{name}</MenuActive>
  };

  const InActiveMenuRender = (name) => {
    return <MenuInActive>{name}</MenuInActive>
    }

  const renderMenus = (menus) => {
    return menus.map((menu) => {
      var {num, src, name} = menu;
      return(
        <MenuLink key={num} src={src} num={num} handleClick={(e,num)=>{handleClick(e,num)}}>
          {activeMenu == num ? ActiveMenuRender(name) : InActiveMenuRender(name) }
        </MenuLink>
      );
    })
  }

  return (
        <Wrap {...props}>
          {renderMenus(menus)}
        </Wrap>
  );
}

// export default React.memo(MenuList);
export default MenuList

MenuList.propTypes = {
};

MenuList.defaultProps = {
};


// export default connect(mapStateToProps, { logout });
