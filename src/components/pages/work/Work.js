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
  console.log(project);
  // MAIN RENDER
  return (
    <MainProject>
      <NameProject>{project?.title}</NameProject>
      <Description>{project?.description}</Description>
      <ProjectImage src={project?.images[0]} />
      <ProjectVideo src={project?.video} />
    </MainProject>
  );
};

export default Work;
