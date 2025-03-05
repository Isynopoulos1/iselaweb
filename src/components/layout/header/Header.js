import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { HeaderContainer, SubContainer } from "./Header.styles";

//IMPORT COMPONENTS
import AsideMenu from "@elements/asideMenu/AsideMenu";
import Logo from "@elements/logo/Logo";
import Menu from "@elements/menu/Menu";

const Header = () => {
  //HOOKS
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <SubContainer>
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo color="black" width="150px" />
          </Link>
          {isOpen && <AsideMenu setOpen={setOpen} />}
          <Menu isOpen={isOpen} setOpen={setOpen} color="black" width="150px" />
        </SubContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
