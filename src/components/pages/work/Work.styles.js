import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const MainProject = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NameProject = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  font-family: ${fonts.font1};
  font-size: ${sizes.lg};
  font-weight: 200;
  margin-bottom: 100px;
`;
export const Description = styled.p`
  display: flex;
  line-height: 100%;
  display: inline;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  line-height: 1.5;
  margin-bottom: 100px;
`;
export const ProjectImage = styled.img`
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`;
export const ProjectVideo = styled.video`
  display: flex;
  width: 100%;
`;
