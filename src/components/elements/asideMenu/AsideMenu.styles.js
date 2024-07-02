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

  & a {
    display: flex;
    color: ${colors.black};
    font-size: ${sizes.hg};
    font-family: ${fonts.font1};
    font-weight: lighter;
    text-decoration: none;
    transition: white 0.8s linear 0.5s;
  }
  & a:hover {
    color: ${colors.test2};
    transition: color 0.2s ease;
  }
`;
export const Languages = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

export const Language = styled.span`
  position: relative;
  font-family: ${fonts.font1};
  color: ${colors.test5};
  font-size: ${sizes.xs};
  font-weight: 300;
  padding: ${sizes.xs};
  cursor: pointer;
  &:hover {
    color: ${colors.black};
  }
  &:first-child::after {
    position: absolute;
    margin-left: ${sizes.xs};
    content: "|";
  }
`;
