import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS
import AsideMenu from "@elements/asideMenu/AsideMenu";
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
        {isOpen && <AsideMenu setOpen={setOpen} />}
        <Menu isOpen={isOpen} setOpen={setOpen} color="black" width="150px" />
      </HeaderContainer>
    </>
  );
};

export default Header;
