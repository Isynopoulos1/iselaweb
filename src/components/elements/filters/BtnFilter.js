import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";
// IMPORT COMPONENT
import Close from "@assets/icons/close";

//IMPORT STYLES
import { colors } from "@styles";
import { BtnWrapper } from "./BtnFilter.styles";

const BtnFilter = ({ label, filter, onClick }) => {
  //HOOKS
  const translate = useSelector(state => getTranslate(state.localize));
  //MAIN RENDER
  return (
    <BtnWrapper>
      <button onClick={onClick}>{translate(label)}</button>
      {label === filter && <Close color={colors.lightergray} />}
    </BtnWrapper>
  );
};

BtnFilter.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

BtnFilter.defaultProps = {
  label: "button 1",
  onClick: () => {}
};

export default BtnFilter;
