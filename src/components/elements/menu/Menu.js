import React from "react";
import { Cross as Burger } from "hamburger-react";
import PropTypes from "prop-types";
//IMPORT COMPONENTS

//IMPORT STYLES
import { MenuWrapper, MenuStyleTop, MenuStyleBottom } from "./Menu.styles";

const Menu = ({ isOpen, setOpen }) => {
  return (
    <MenuWrapper>
      <Burger toggled={isOpen} toggle={setOpen} />
    </MenuWrapper>
  );
};
Menu.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func
};

Menu.defaultProps = {
  isOpen: false,
  setOpen: () => {}
};

export default Menu;
