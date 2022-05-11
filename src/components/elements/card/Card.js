import React from "react";
import PropTypes from "prop-types";
//IMPORT STYLES
import { CardContainer, CardCover, ProjectTitle } from "./Card.styles";

const Card = ({ title, cover }) => {
  return (
    <CardContainer>
      <CardCover src={cover} />
      <ProjectTitle>{title}</ProjectTitle>
    </CardContainer>
  );
};

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  cover: "",
  title: "",
};

export default Card;
