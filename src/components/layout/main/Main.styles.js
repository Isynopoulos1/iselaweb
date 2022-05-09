import styled from "styled-components";
import { colors } from "@styles";
import { sizes } from "@styles";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 0px 50px 50px 50px;
  color: ${colors.white};
  font-size: ${sizes.md};
  font-family: "Roboto Flex", sans-serif;
  font-weight: 200;
`;
