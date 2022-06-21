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
  max-width: 1200px;
  margin-top: ${margins.xs};
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 2;
  max-width: 1200px;
  font-size: ${sizes.sm};
  font-family: "Roboto Flex", sans-serif;
  font-weight: 200;
`;
export const Greetings = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: ${sizes.xl};
  margin-bottom: ${margins.xs};
`;
