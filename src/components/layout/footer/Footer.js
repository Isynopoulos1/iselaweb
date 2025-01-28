import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { FooterContainer, Copyright } from "./Footer.styles";

//IMPORT COMPONENTS
import Social from "@elements/social/Social";


const currentYear = new Date().getFullYear();

const Footer = () => {
  //HOOKS
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <FooterContainer>
      <Social />
      <Copyright>
      {translate("footer.copyright").replace("{year}", currentYear)}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
