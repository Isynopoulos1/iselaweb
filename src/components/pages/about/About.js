import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { AboutContainer, Photo, Description, Greetings, MainWrapper } from "./About.styles";

const About = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  // MAIN RENDER
  return (
    <AboutContainer>
      <MainWrapper>
      <Photo src="https://ik.imagekit.io/ppayaz/iselalarcon/about/final4_KhMS7Hfea.jpg?updatedAt=1702909926599" alt="Photo" />
        <Description>
          <Greetings>{translate("about.title")}</Greetings>
          <p>{translate("about.description")}</p>
          <p> {translate("about.description2")}</p>
          <p> {translate("about.description3")}</p>
          <p> {translate("about.description4")}</p>
          <p> {translate("about.description5")}</p>
        </Description>
       
      </MainWrapper>
    </AboutContainer>
  );
};

export default About;
