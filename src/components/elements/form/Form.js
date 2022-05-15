import React from "react";

//IMPORT STYLES
import { InputWrapper, InputStyle, TextAreaStyle } from "./Form.styles";

const Form = () => {
  return (
    <InputWrapper>
      <InputStyle placeholder="Name" />
      <InputStyle placeholder="Mail" />
      <TextAreaStyle placeholder="Message" />
    </InputWrapper>
  );
};

export default Form;
