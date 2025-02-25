import styled from "styled-components";
import { colors, sizes, fonts, spacing } from "@styles";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const Content= styled.div`
  line-height: 2;
  border: 1px solid hsla(250, 100%, 84%, 1);
  font-size: ${sizes.sm};
  font-family: ${fonts.font1};
  font-weight: 300;
  width:100%;
  height: 200px;
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: 5px;
  max-height: 350px;
 
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.xss};
  gap: ${spacing.xsss};
  text-align: center;
`;

export const SubContainer = styled.div`
display: flex;
gap: ${spacing.tiny};
justify-content:center;
align-items: center;

`;

 export const Subtitle = styled.h1`
 display: flex;
 font-size:16px;
 font-weight: 400;
 `;



export const Emoji =styled.p`
  font-size: 25px;
`;