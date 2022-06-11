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
  ProjectContainer,
  VideoContainer
} from "./Work.styles";

const Work = ({ match }) => {
  const project =
    projects?.find(p => {
      return p.href === match.params.name;
    }) ?? {};

  // MAIN RENDER
  return (
    <MainProject>
      <NameProject>{project?.title}</NameProject>
      <DescriptionContainer>
        <Description>{project?.description}</Description>
      </DescriptionContainer>
      <VideoContainer>
        <ProjectVideo id="video" src={project?.video} autoPlay muted loop />
      </VideoContainer>
      <ProjectContainer>
        {project?.images.map((img, i) => (
          <ProjectImage key={i} src={img} />
        ))}
      </ProjectContainer>
    </MainProject>
  );
};

export default Work;
