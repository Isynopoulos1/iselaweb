import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { ContactContainer, CtaForm } from "./Contact.styles";

//IMPORT COMPONENTS

import Form from "@elements/form/Form";

const Contact = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  // MAIN RENDER
  return (
    <ContactContainer>
      <CtaForm>{translate("contact.cta")}</CtaForm>
      <Form />
    </ContactContainer>
  );
};

export default Contact;
