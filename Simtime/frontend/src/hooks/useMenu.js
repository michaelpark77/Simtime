import React from "react";

export default () => {
  //후에 DB로 관리
  let menus = [
    {num: 0, src:"/", name:"CALENDAR"}, 
    {num: 1, src:"/mysimtime", name:"MY SIMTIME"},
    {num: 2, src:"/friends", name:"FRIENDS"}
  ]

  let [activeMenu, setActiveMenu] = React.useState(0);
  // let [menus, setMenus] = React.useState(initialMenu);

  let handleMenu = (menuNum=0) => {
    setActiveMenu(menuNum);
  };

  return { menus, activeMenu, handleMenu };
  // return { activeMenu, handleMenu };
};
