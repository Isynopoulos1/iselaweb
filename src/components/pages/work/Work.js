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
  Subtitle,
  ProjectVideo,
  DataContainer,
  Category,
  User,
  Challenges,
  Process,
  Objectives,
  ProjectContainer,
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
        {project?.video && <ProjectVideo src={project?.video} autoPlay muted loop />}
        <Subtitle>{translate(project?.contextSub)}</Subtitle>
        <User>{translate(project?.context)}</User>
        <Subtitle>{translate(project?.userSub)}</Subtitle>
        <User>{translate(project?.user)}</User>
        <Subtitle>{translate(project?.mainCha)}</Subtitle>
        <Objectives>
        {project?.objective?.map((obj, index) => (
          <div key={index}>{translate(obj)}</div>
        ))}
        </Objectives>
        {/* <Challenges>{translate(project?.challenges)}</Challenges> */}
        <Subtitle>{translate(project?.action)}</Subtitle>
        <Process>
        {project?.process?.map((step, index) => (
          <div key={index}>{translate(step)}</div>
        ))}
        </Process>
      </DataContainer>
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
