import styled from "styled-components";
import { colors, sizes, margins } from "@styles";

export const AboutContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: ${margins.sm};
  width: calc(100% - 100px);
  height: auto;
  padding: 20px 50px;
`;
export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin-top: ${margins.xs};
  @media only screen and (max-width: 700px) {
    max-width: 100%;
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
  margin-bottom: ${margins.xs};
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
