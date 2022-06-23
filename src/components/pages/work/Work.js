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
  Context,
  ProjectImage,
  ProjectVideo,
  ProjectWrapper,
  DataContainer,
  Category,
  ProjectContainer,
  Challenges,
  User,
  Process,
  Tools
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
      <DataContainer>
        <Category>{project?.category}</Category>
        <Context>{project?.context}</Context>
        <Challenges>{project?.challenges}</Challenges>
        <User>{project?.user}</User>
      </DataContainer>
      {project?.video && <ProjectVideo src={project?.video} autoPlay muted loop />}
      <Process>
        {project?.process.map((line, i) => {
          return <p key={i}>{line}</p>;
        })}
      </Process>
      <Tools>
        {project?.tools.map((filter, i) => {
          return <p key={i}>{filter}</p>;
        })}
      </Tools>
      <ProjectContainer>
        {project?.images.map((img, i) => (
          <Square key={i} src={img} index={i} onClick={() => handleSelect(img)} />
        ))}
      </ProjectContainer>
    </MainProject>
  );
};

export default Work;
