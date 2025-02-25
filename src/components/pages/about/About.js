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

  //   // ARRAY
  const ArrColor = [
    colors.purpleLighter,
    colors.lavenderMist,
    colors.softLilac,
    colors.mutedViolet,
    colors.LavenderPurple,
    colors.DeepPurple,
    colors.VioletShadow,
  ];
  const Emojis =[
   " 📍",
  "  🎨",
   " 👾",
   " 🖤",
   " 🤩",
   " 📚",
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
              <ContentCard bgColor={ArrColor[0]} subtitle={translate("about.subtitle1")} text={translate("about.description1")} emoji ={Emojis[0]} />
              <ContentCard bgColor={ArrColor[0]}  subtitle={translate("about.subtitle2")} text={translate("about.description2")} emoji ={Emojis[1]} />
            </FirstRow>
            <SecondRow>
              <ContentCard bgColor={ArrColor[0]} subtitle={translate("about.subtitle3")} text={translate("about.description3")} emoji ={Emojis[2]} />
              <ContentCard bgColor={ArrColor[0]} subtitle={translate("about.subtitle4")} text={translate("about.description4")} emoji ={Emojis[3]} />   
            </SecondRow>
            <ThirdRow>
              <ContentCard bgColor={ArrColor[0]}  subtitle={translate("about.subtitle5")} text={translate("about.description5")} emoji ={Emojis[5]}/>
              <ContentCard bgColor={ArrColor[0]}  subtitle={translate("about.subtitle6")} text={translate("about.description6")} emoji ={Emojis[4]} />
            </ThirdRow>
        </ContentWrapper>
      </MainWrapper>
    </AboutContainer>
  );
};

export default About;
