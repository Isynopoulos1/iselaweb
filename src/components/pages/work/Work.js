import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

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
  ProjectVideo,
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
  const translate = useSelector(state => getTranslate(state.localize));
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
        <Context>{translate(project?.context)}</Context>
        <Challenges>{translate(project?.challenges)}</Challenges>
        <User>{translate(project?.user)}</User>
      </DataContainer>
      {project?.video && <ProjectVideo src={project?.video} autoPlay muted loop />}
      <Process>
        {project?.process.map((line, i) => {
          return <p key={i}>{translate(line)}</p>;
        })}
      </Process>
      <Tools>
        {project?.tools.map((filter, i) => {
          return <p key={i}>{translate(filter)}</p>;
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
