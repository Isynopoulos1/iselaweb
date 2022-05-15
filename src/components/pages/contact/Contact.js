import React from "react";

//IMPORT STYLES
import { ContactContainer, CtaForm } from "./Contact.styles";

//IMPORT COMPONENTS
import Button from "@elements/button/Button";
import Form from "@elements/form/Form";

const Contact = () => {
  return (
    <ContactContainer>
      <CtaForm>Contact me :) </CtaForm>
      <Form />
      <Button />
    </ContactContainer>
  );
};

export default Contact;
