import React from "react";

//IMPORT STYLES
import { InputWrapper, InputStyle, TextAreaStyle } from "./Inputs.styles";

const Inputs = () => {
  return (
    <InputWrapper>
      <InputStyle placeholder="Name" />
      <InputStyle placeholder="Mail" />
      <TextAreaStyle placeholder="Message" />
    </InputWrapper>
  );
};

export default Inputs;
