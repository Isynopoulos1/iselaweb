import React from "react";
import { Link, Route } from "react-router-dom";

//IMPORT DATA
import { projects } from "@assets/data";

//IMPORT STYLES
import { BgMenu } from "./AsideMenu.styles";

//IMPORT COMPONENTS
import LogoDesktop from "@elements/logo/LogoDesktop";

const AsideMenu = ({ setOpen }) => {
  const categories = [
    { path: "/about", label: "About" },
    { path: "/works", label: "Works" },
    { path: "/contact", label: "Contact" }
  ];
  return (
    <BgMenu>
      {categories.map((categorie, i) => {
        return (
          <Link key={i} to={categorie.path} onClick={() => setOpen(false)}>
            {categorie.label}
          </Link>
        );
      })}
    </BgMenu>
  );
};

export default AsideMenu;
