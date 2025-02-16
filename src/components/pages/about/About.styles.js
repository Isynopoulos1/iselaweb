import styled from "styled-components";
import { colors, sizes, spacing } from "@styles";

export const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.md};
  width: calc(100% - 40px);
  height: auto;
  padding: 20px;
  @media only screen and (max-width: 840px) {
    margin-top: ${spacing.xs};
  }
`;
export const MainWrapper =styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: ${spacing.xss};
  max-width: 1200px;
  @media only screen and (max-width: 840px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`
export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  object-fit: cover; 
  margin-top: ${spacing.xs};
  @media only screen and (max-width: 840px) {
    width: 100%;
    height: auto;
    margin-top: ${spacing.tiny};
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  line-height: 2;
  width: 800px;
  font-size: ${sizes.sm};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin-top: ${spacing.tiny};
  }
`;
export const Greetings = styled.h2`
  text-align: left;
  margin-top: ${spacing.xs};
  width: 800px;
  font-size: ${sizes.xl};
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin-top: ${spacing.tiny};
    font-size: ${sizes.lg};
  }
`;

