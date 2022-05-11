import React from "react";

//IMPORT COMPONENTS
import BtnFilter from "@elements/filters/BtnFilter";
import Card from "@elements/card/Card";

//IMPORT STYLES
import { WorkContainer, Filters, Covers } from "./Work.styles";

// IMPORT DATA
import { projects } from "@assets/data";

const Work = () => {
  // RENDER FUNCTIONS
  const renderProjects = () => {
    return projects.map((card, i) => (
      <Card key={card.i} image={card.image} title={card.title} />
    ));
  };

  // MAIN RENDER
  return (
    <WorkContainer>
      <Filters>
        <BtnFilter label="Animation" />
        <BtnFilter label="UX-UI" />
        <BtnFilter label="Art Direction" />
        <BtnFilter label="Development" />
        <BtnFilter label="Branding" />
      </Filters>

      <Covers>{renderProjects()}</Covers>
    </WorkContainer>
  );
};

export default Work;
