import React, { useState } from "react";

// IMPORT DATA
import { projects } from "@assets/data";

// IMPORT COMPONENT
import Square from "@elements/square/Square";

//IMPORT STYLES
import {
  Wrapper,
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
  // HOOKS & VARIABLES
  const [toggle, setToggle] = useState("");
  const project =
    projects?.find(p => {
      return p.href === match.params.name;
    }) ?? {};

  // HANDLE FUNCTIONS
  const handleSelect = image => {
    return setToggle(image);
  };
  const handleClose = () => {
    return setToggle("");
  };
  // MAIN RENDER
  return (
    <MainProject>
      {toggle && (
        <Wrapper onClick={handleClose}>
          <img src={toggle} />
        </Wrapper>
      )}
      <NameProject>{project?.title}</NameProject>
      <DescriptionContainer>
        <Description>{project?.description}</Description>
      </DescriptionContainer>
      {project?.video && <ProjectVideo src={project?.video} autoPlay muted loop />}
      <ProjectContainer>
        {project?.images.map((img, i) => (
          <Square key={i} src={img} index={i} onClick={() => handleSelect(img)} />
        ))}
      </ProjectContainer>
    </MainProject>
  );
};

export default Work;
