import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTranslate, withLocalize } from "r1-localize";
import PropTypes from "prop-types";

//IMPORT STYLES
import { BgMenu, Languages, Language } from "./AsideMenu.styles";

const AsideMenu = ({ setOpen, languages, setActiveLanguage }) => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));


  // DATA
  const categories = [
    { path: "/about", label: "menu.about" },
    { path: "/works", label: "menu.works" },
    { path: "/contact", label: "menu.contact" }
  ];

  // HANDLE FUNCTION

  // RENDER FUNCTION
  const renderLanguages = () => {
    return languages.map(l => (
      <Language key={l.code} onClick={() => setActiveLanguage(l.code)}>
        {l.name}
      </Language>
    ));
  };
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
      <Languages>{renderLanguages()}</Languages>
    </BgMenu>
  );
};

export default withLocalize(AsideMenu);
