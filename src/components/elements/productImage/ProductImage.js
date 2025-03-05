import React from "react";
import PropTypes from "prop-types";

// IMPORT STYLING
import { ProductImageWrapper, ContainerImage } from "./ProductImage.styles";

const ProductImage = ({ src, index, onClick }) => {
  return (
    <ProductImageWrapper onClick={onClick}>
      <ContainerImage src={src} alt={`project vizualization ${index + 1}`} />
    </ProductImageWrapper>
  );
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ProductImage.defaultProps = {
  onClick: () => {}
};

export default ProductImage;
