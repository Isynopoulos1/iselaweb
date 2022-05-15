import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { CardContainer, CardCover, ProjectTitle } from "./Card.styles";

const Card = ({ title, cover, href }) => {
  return (
    <Link to={`/works/${href}`} style={{ textDecoration: "none" }}>
      <CardContainer>
        <CardCover src={cover} />
        <ProjectTitle>{title}</ProjectTitle>
      </CardContainer>
    </Link>
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
