import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { AboutContainer, Photo, Description, Greetings } from "./About.styles";

const About = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  // MAIN RENDER
  return (
    <AboutContainer>
      <Description>
        <Greetings>{translate("about.title")}</Greetings>
        <p>{translate("about.description")}</p>
        <p> {translate("about.description2")}</p>
        <p> {translate("about.description3")}</p>
        <p> {translate("about.description4")}</p>
      </Description>
      <Photo src="https://ik.imagekit.io/ppayaz/iselalarcon/about/final4_KhMS7Hfea.jpg?updatedAt=1702909926599" alt="Photo" />
    </AboutContainer>
  );
};

export default About;
