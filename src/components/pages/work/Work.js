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
  ProjectWrapper,
  DescriptionContainer,
  ProjectContainer
} from "./Work.styles";

const Work = ({ match }) => {
  const project = projects?.find(p => p.href === match.params.name) ?? {};

  // MAIN RENDER
  return (
    <MainProject>
      <NameProject>{project?.title}</NameProject>
      <DescriptionContainer>
        <Description>{project?.description}</Description>
      </DescriptionContainer>
      <ProjectVideo id="video" src={project?.video} autoPlay muted loop />
      <ProjectContainer>
        <ProjectImage src={project?.images[0]} />
        <ProjectImage src={project?.images[1]} />
      </ProjectContainer>
    </MainProject>
  );
};

export default Work;
