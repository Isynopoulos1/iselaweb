import React from "react";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
