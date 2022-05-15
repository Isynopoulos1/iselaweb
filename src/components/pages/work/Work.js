import React from "react";

// IMPORT DATA
import { projects } from "@assets/data";

//IMPORT STYLES
import {
  MainProject,
  NameProject,
  Description,
  ProjectImage,
  ProjectVideo,
} from "./Work.styles";

const Work = ({ match }) => {
  const project = projects?.find((p) => p.href === match.params.name) ?? {};

  // MAIN RENDER
  return (
    <MainProject>
      <NameProject>{project?.title}</NameProject>
      <Description>{project?.description}</Description>
      <ProjectImage src={project?.images[0]} />
      <ProjectImage src={project?.images[1]} />
      <ProjectVideo id="video" src={project?.video} autoPlay muted loop />
    </MainProject>
  );
};

export default Work;
