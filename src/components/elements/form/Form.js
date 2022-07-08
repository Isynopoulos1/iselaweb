import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { InputWrapper, InputStyle, TextAreaStyle } from "./Form.styles";

//IMPORT COMPONENTS
import Button from "@elements/button/Button";

const Form = () => {
  //HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  //MAIN RENDER
  return (
    <InputWrapper>
      <InputStyle placeholder={translate("contact.name")} />
      <InputStyle placeholder={translate("contact.mail")} />
      <TextAreaStyle placeholder={translate("contact.message")} />
      <Button />
    </InputWrapper>
  );
};

export default Form;
