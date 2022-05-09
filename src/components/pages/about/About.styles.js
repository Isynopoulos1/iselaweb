import styled from "styled-components";
import { colors, sizes } from "@styles";

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  width: calc(100% - 100px);
  height: auto;
  padding: 20px 50px;
`;
export const Photo = styled.img`
  width: 50%;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${sizes.sm};
  line-height: 1.5;
  font-family: "Roboto Flex", sans-serif;
  font-weight: 200;
  padding: 0px 20px 0px 20px;
`;
export const Greetings = styled.div`
  display: flex;
  font-size: ${sizes.xl};
  margin-bottom: 1rem;
`;
