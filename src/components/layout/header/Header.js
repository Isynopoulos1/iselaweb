import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS

import LogoDesktop from "@elements/logo/LogoDesktop";
import Menu from "@elements/menu/Menu";

const Header = () => {
  //HOOKS
  const [isOpen, setOpen] = useState(false);

  //HANDLE FUNCTION

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <LogoDesktop color="black" width="150px" />
        </Link>
        {isOpen && <h2>FUTURE MENU</h2>}
        <Menu isOpen={isOpen} setOpen={setOpen} color="black" width="150px" />
      </HeaderContainer>
    </>
  );
};

export default Header;
