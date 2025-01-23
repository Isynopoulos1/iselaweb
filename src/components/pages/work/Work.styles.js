import styled from "styled-components";
import { sizes, fonts, spacing, colors } from "@styles";

export const MainProject = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007d;
  backdrop-filter: blur(15px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 1200px;
  }
`;
export const NameProject = styled.h1`
  display: flex;
  text-align: left;
  width: 100%;
  margin-top: ${spacing.md};
  font-family: ${fonts.font1};
  font-size: ${sizes.lg};
  font-weight: 400;
  margin-bottom: ${spacing.xss};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
export const Category = styled.h1`
  display: flex;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 400;
  padding-bottom: ${spacing.xss};
`;
export const Subtitle = styled.h1`
  line-height: 2;
  flex-direction: column;
  display: flex;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 400;
  color: ${colors.lightgray};
  padding-top: ${spacing.xss};
`;
export const User = styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 300;
`;
export const Challenges = styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 300;
`;
export const Process =styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 300;
`;
export const Objectives =styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 300;
`;
export const Tools = styled.div`
  line-height: 2;
  font-weight: 400;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.xs};
  margin-bottom: ${spacing.xs};
  margin-top: ${spacing.xs};
`;
export const VideoContainer = styled.div`
  display: flex;
`;
export const ProjectVideo = styled.video`
  display: flex;
  width: 100%;
  margin-bottom: ${spacing.xs};
`;
export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 12px);
`;
