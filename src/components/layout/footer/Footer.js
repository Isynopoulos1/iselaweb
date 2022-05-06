import React from "react";

//IMPORT STYLES
import { FooterContainer, Copyright } from "./Footer.styles";

//IMPORT COMPONENTS
import Social from "@elements/social/Social";

const Footer = () => {
  return (
    <FooterContainer>
      <Social />
      <Copyright>Copyright</Copyright>
    </FooterContainer>
  );
};

export default Footer;
