import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { BtnWrapper } from "./BtnFilter.styles";

const BtnFilter = ({ label }) => {
  return <BtnWrapper>{label}</BtnWrapper>;
};

BtnFilter.propTypes = {
  label: PropTypes.string,
};

BtnFilter.defaultProps = {
  label: "button 1",
};

export default BtnFilter;
