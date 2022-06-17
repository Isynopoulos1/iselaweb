import React from "react";
import PropTypes from "prop-types";

// IMPORT STYLING
import { SquareWrapper, SquareImage } from "./Square.styles";

const Square = ({ src, index, onClick }) => {
  return (
    <SquareWrapper onClick={onClick}>
      <SquareImage src={src} alt={`project vizualization ${index + 1}`} />
    </SquareWrapper>
  );
};

Square.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Square.defaultProps = {
  onClick: () => {}
};

export default Square;
