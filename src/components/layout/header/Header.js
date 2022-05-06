import React from "react";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS
import Logo from "@assets/icons/isela-logo";
import Menu from "@elements/menu/Menu";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo color="black" width="150px" />
      <Menu color="black" width="150px" />
    </HeaderContainer>
  );
};

export default Header;
