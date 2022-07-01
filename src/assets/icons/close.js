import React from "react";
import PropTypes from "prop-types";

// IMPORT CONSTANTS
import { colors } from "@styles";

export const Close = ({ color }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
};

Close.propTypes = {
  color: PropTypes.string
};

Close.defaultProps = {
  color: colors.black
};

export default Close;
