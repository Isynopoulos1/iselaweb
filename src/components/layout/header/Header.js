import React from "react";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS

import LogoDesktop from "@elements/logo/LogoDesktop";
import Menu from "@elements/menu/Menu";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoDesktop color="black" width="150px" />
      <Menu color="black" width="150px" />
    </HeaderContainer>
  );
};

export default Header;
