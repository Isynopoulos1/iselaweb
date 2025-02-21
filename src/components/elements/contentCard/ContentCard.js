import React from 'react'
import { useSelector } from "react-redux";
import { getTranslate } from "r1-localize";

//IMPORT STYLES
import { MainContainer, Greetings, Content, Description, Emoji } from "./ContentCard.styles";
import { colors } from "@styles";

export const ContentCard = ({ bgColor = "transparent" , text, emoji}) => {
    return (
        <MainContainer>
         <Content bgColor={bgColor}>
            <Description bgColor={bgColor}>
             <Emoji> {emoji} </Emoji> 
              {text}
            </Description>
      </Content>
      </MainContainer>
    );
  };


export default ContentCard;