import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const BgMenu = styled.aside`
  top: 0;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  grid-gap: 70px;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: white 0.8s linear 0.2s;

  & a {
    display: flex;
    color: ${colors.black};
    font-size: ${sizes.hg};
    font-family: ${fonts.font1};
    font-weight: lighter;
    text-decoration: none;
  }
`;
