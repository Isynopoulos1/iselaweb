import React from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { BgMenu } from "./AsideMenu.styles";

//IMPORT COMPONENTS
import LogoDesktop from "@elements/logo/LogoDesktop";

const AsideMenu = ({ setOpen }) => {
  return (
    <BgMenu>
      <Link to="/about" onClick={() => setOpen(false)}>
        About
      </Link>
      <Link to="/work" onClick={() => setOpen(false)}>
        Work
      </Link>
      <Link to="/contact" onClick={() => setOpen(false)}>
        Contact
      </Link>
    </BgMenu>
  );
};

export default AsideMenu;
