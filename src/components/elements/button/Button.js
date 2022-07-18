import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

import { BtnForm } from "./Button.styles";
const Button = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  return <BtnForm type="submit">{translate("contact.send")}</BtnForm>;
};

export default Button;
