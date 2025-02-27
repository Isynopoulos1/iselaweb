import React from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

// IMPORT COMPONENTS
import ContentCard from "@elements/contentCard/ContentCard";

//IMPORT STYLES
import { AboutContainer, Photo, FirstRow, SecondRow, ThirdRow, Greetings, MainWrapper, ContentWrapper, Header} from "./About.styles";
import { colors } from "@styles";

const About = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize));
  // EMOJIS ARRAY
  // const Emojis =[ " 📍", " 🎨", "👾"," 🖤"," 🤩"," 📚",];
  //DATA CONTENT
  const dataContent =[
  { subtitle: translate("about.subtitle1"),
    text:translate("about.description1"),
  },
  {
    subtitle: translate("about.subtitle2"),
    text:translate("about.description2"),
  },
  {
    subtitle: translate("about.subtitle3"),
    text:translate("about.description3"),
  },
  {
    subtitle: translate("about.subtitle4"),
    text:translate("about.description4"),
  },
  {
    subtitle: translate("about.subtitle5"),
    text:translate("about.description5"),
  },
  {
    subtitle: translate("about.subtitle6"),
    text:translate("about.description6"),
  }
];

  // MAIN RENDER
  return (
    <AboutContainer>
      <MainWrapper>
        <Header>
          <Photo src="https://ik.imagekit.io/ppayaz/iselalarcon/about/final4_KhMS7Hfea.jpg?updatedAt=1702909926599" alt="Photo" />
          <Greetings>{translate("about.title")}</Greetings>
        </Header>
         <ContentWrapper>
            <FirstRow>
            {dataContent.slice(0,2).map((data,index) => (
              <ContentCard key={index} bgColor= {colors.lavenderMist} subtitle={data.subtitle} text={data.text}/>
            ))}
            </FirstRow>
            <SecondRow>
            {dataContent.slice(2,4).map((data,index) => (
              <ContentCard key={index} bgColor= {colors.lavenderMist} subtitle={data.subtitle} text={data.text} />
            ))}
          
            </SecondRow>
            <ThirdRow>
            {dataContent.slice(4,6).map((data,index) => (
              <ContentCard key={index} bgColor= {colors.lavenderMist} subtitle={data.subtitle} text={data.text}/>
            ))}
            </ThirdRow>
        </ContentWrapper>
      </MainWrapper>
    </AboutContainer>
  );
};

export default About;
