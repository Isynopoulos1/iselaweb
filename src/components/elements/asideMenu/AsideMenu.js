import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";
import PropTypes from "prop-types";

//IMPORT STYLES
import { BgMenu, Languaje, Spanish, English } from "./AsideMenu.styles";

const AsideMenu = ({ setOpen }) => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  // DATA
  const categories = [
    { path: "/about", label: "menu.about" },
    { path: "/works", label: "menu.works" },
    { path: "/contact", label: "menu.contact" }
  ];

  // MAIN RENDER
  return (
    <BgMenu>
      {categories.map((categorie, i) => {
        return (
          <Link key={i} to={categorie.path} onClick={() => setOpen(false)}>
            {translate(categorie.label)}
          </Link>
        );
      })}
      <Languaje>
        <Spanish
          onClick={() => {
            console.log("caca");
          }}
        >
          Es
        </Spanish>
        <English>En</English>
      </Languaje>
    </BgMenu>
  );
};

export default AsideMenu;
