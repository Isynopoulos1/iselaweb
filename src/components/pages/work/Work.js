import React from "react";

//IMPORT COMPONENTS
import BtnFilter from "@elements/filters/BtnFilter";

//IMPORT STYLES
import { WorkContainer, Filters } from "./Work.styles";

const Work = () => {
  return (
    <WorkContainer>
      <Filters>
        <BtnFilter label="Animation" />
        <BtnFilter label="UX-UI" />
        <BtnFilter label="Art Direction" />
        <BtnFilter label="Development" />
        <BtnFilter label="Branding" />
      </Filters>
    </WorkContainer>
  );
};

export default Work;
