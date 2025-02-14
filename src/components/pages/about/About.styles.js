import styled from "styled-components";
import { colors, sizes, spacing } from "@styles";

export const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.sm};
  width: calc(100% - 40px);
  height: auto;
  padding: 20px;

`;

export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  object-fit: cover; 
  margin-top: ${spacing.xs};
  @media only screen and (max-width: 840px) {
    width: 100%;
    height: auto;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 2;
  width: 800px;
  font-size: ${sizes.sm};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const Greetings = styled.h2`
  text-align: center;
  width: 800px;
  font-size: ${sizes.xl};
  margin-bottom: ${spacing.xs};
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
