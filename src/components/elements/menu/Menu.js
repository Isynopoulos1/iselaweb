import React from "react";
import { Cross as Burger } from "hamburger-react";
//IMPORT COMPONENTS

//IMPORT STYLES
import { MenuWrapper, MenuStyleTop, MenuStyleBottom } from "./Menu.styles";

const Menu = () => {
  return (
    <MenuWrapper>
      <Burger />
    </MenuWrapper>
  );
};

export default Menu;
