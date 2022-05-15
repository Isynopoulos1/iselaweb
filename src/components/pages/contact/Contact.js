import React from "react";

//IMPORT STYLES
import { ContactContainer, CtaForm } from "./Contact.styles";

//IMPORT COMPONENTS

import Form from "@elements/form/Form";

const Contact = () => {
  return (
    <ContactContainer>
      <CtaForm>Contact me :) </CtaForm>
      <Form />
    </ContactContainer>
  );
};

export default Contact;
