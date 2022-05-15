import React from "react";

//IMPORT STYLES
import { InputWrapper, InputStyle, TextAreaStyle } from "./Form.styles";

//IMPORT COMPONENTS
import Button from "@elements/button/Button";

const Form = () => {
  return (
    <InputWrapper>
      <InputStyle placeholder="Name" />
      <InputStyle placeholder="Mail" />
      <TextAreaStyle placeholder="Message" />
      <Button />
    </InputWrapper>
  );
};

export default Form;
