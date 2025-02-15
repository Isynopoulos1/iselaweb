import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { AboutContainer, Photo, Description, Greetings, Collage, MainWrapper } from "./About.styles";

const About = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));

  // MAIN RENDER
  return (
    <AboutContainer>
       <Collage src="https://ik.imagekit.io/ppayaz/iselalarcon/about/collage-iselaweb_7GPs11CQX.png?updatedAt=1739642055906" alt="Photo"/>
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
