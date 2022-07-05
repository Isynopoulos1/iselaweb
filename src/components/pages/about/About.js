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
        {translate("about.description")}
      </Description>
      <Photo
        src="https://ik.imagekit.io/ppayaz/iselalarcon/about/1645198493321_KhmFRf9M1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653900861003"
        alt="Photo"
      />
    </AboutContainer>
  );
};

export default About;
