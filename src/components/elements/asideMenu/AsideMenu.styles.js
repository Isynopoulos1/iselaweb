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
`;
export const Languaje = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;
export const Spanish = styled.p`
  font-family: ${fonts.font1};
  color: ${colors.lightergray};
  font-size: ${sizes.xs};
  font-weight: 300;
  border-right: 1px solid black;
  width: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.black};
  }
`;
export const English = styled.p`
  font-family: ${fonts.font1};
  color: ${colors.lightergray};
  font-size: ${sizes.xs};
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: ${colors.black};
  }
`;
