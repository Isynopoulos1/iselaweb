import React from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS

import LogoDesktop from "@elements/logo/LogoDesktop";
import Menu from "@elements/menu/Menu";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoDesktop color="black" width="150px" />
      </Link>

      <Menu color="black" width="150px" />
    </HeaderContainer>
  );
};

export default Header;
