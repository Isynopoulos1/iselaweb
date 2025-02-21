import styled from "styled-components";
import { colors, sizes, spacing } from "@styles";

export const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${spacing.md};
  width: calc(100% - 40px);
  height: auto;
  padding:${spacing.xss};
  @media only screen and (max-width: 840px) {
    margin-top: ${spacing.xs};
  }
`;
export const MainWrapper =styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: ${spacing.tiny};
  max-width:${spacing.super};
  @media only screen and (max-width: 840px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;  
  gap: ${sizes.xl};
  justify-content: center;
  background-color: ${colors.softLilac};
  border-radius:${spacing.tiny};
  border: 1px solid hsla(250, 100%, 84%, 1);
  @media only screen and (max-width: 840px) {
   flex-direction: column;
   gap: ${spacing.tiny};
  }
`;
export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width:${spacing.mdd};
  border-radius: ${spacing.tiny};
  object-fit: cover; 
  @media only screen and (max-width: 840px) {
   flex-direction: column;
   width: 60%;
  }
`;
 export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing.tiny};
 `;
export const Greetings = styled.h2`
  display:flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: ${sizes.xl};
  @media only screen and (max-width: 840px) {
    width: 100%;
    font-size: ${sizes.lg};
    min-height: ${spacing.sm};
  }
`;

export const FirstRow = styled.div`
  display: flex;
  gap: ${spacing.tiny};
  width: 100%;
  justify-content: center;
  text-align: left;
  line-height: 2;
  font-size: ${sizes.sm};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 840px) {
   flex-direction: column;
  }
  

`;
export const SecondRow = styled.div`
  display: flex;
  width: 100;
  gap: ${spacing.tiny};
  @media only screen and (max-width: 840px) {
   flex-direction: column;
  }
`;
export const ThirdRow = styled.div`
  display: flex;
  width: 100;
  gap: ${spacing.tiny};
  margin-bottom: ${spacing.xss};
  @media only screen and (max-width: 840px) {
   flex-direction: column;
  }`
;


