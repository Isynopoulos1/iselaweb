import React from "react";

//IMPORT STYLES
import { ContactContainer, CtaForm } from "./Contact.styles";

//IMPORT COMPONENTS
import Button from "@elements/button/Button";
import Inputs from "@elements/inputs/Inputs";

const Contact = () => {
  return (
    <ContactContainer>
      <CtaForm>Contact me :) </CtaForm>
      <Inputs />
      <Button />
    </ContactContainer>
  );
};

export default Contact;
