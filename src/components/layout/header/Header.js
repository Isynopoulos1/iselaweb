import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { HeaderContainer, SubContainer } from "./Header.styles";

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
        <SubContainer>
          <Link to="/" onClick={() => setOpen(false)}>
            <LogoDesktop color="black" width="150px" />
          </Link>
          {isOpen && <AsideMenu setOpen={setOpen} />}
          <Menu isOpen={isOpen} setOpen={setOpen} color="black" width="150px" />
        </SubContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
