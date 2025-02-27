import React from 'react'
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { MainContainer, Greetings, Content, Description, Emoji, SubContainer, Subtitle} from "./ContentCard.styles";
import { colors } from "@styles";

export const ContentCard = ({ bgColor = "transparent" , text,subtitle}) => {
    return (
        <MainContainer>
         <Content bgColor={bgColor}>
            <Description bgColor={bgColor}>
              <SubContainer>
                <Subtitle>{subtitle}</Subtitle>
              </SubContainer>
              {text}
            </Description>
      </Content>
      </MainContainer>
    );
  };


export default ContentCard;