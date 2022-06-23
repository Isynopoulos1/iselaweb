import styled from "styled-components";
import { colors, sizes, fonts, margins } from "@styles";

export const MainProject = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007d;
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
  margin-top: ${margins.md};
  font-family: ${fonts.font1};
  font-size: ${sizes.lg};
  font-weight: 400;
  margin-bottom: ${margins.xss};
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
  font-weight: bolder;
  margin-bottom: ${margins.xss};
`;
export const Context = styled.p`
  line-height: 2;
  flex-direction: column;
  display: flex;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
`;
export const Challenges = styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
`;
export const User = styled.p`
  line-height: 2;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  margin-bottom: ${margins.xs};
`;
export const Process = styled.div`
  & p {
    line-height: 2;
    text-align: left;
    font-family: ${fonts.font1};
    font-size: ${sizes.sm};
    font-weight: 200;
  }
`;
export const Tools = styled.div`
  line-height: 2;
  font-weight: 400;
  text-align: left;
  font-family: ${fonts.font1};
  font-size: ${sizes.xs};
  margin-bottom: ${margins.xs};
  margin-top: ${margins.xs};
`;
export const VideoContainer = styled.div`
  display: flex;
`;
export const ProjectVideo = styled.video`
  display: flex;
  width: 100%;
  margin-bottom: ${margins.xs};
`;
export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 12px);
`;
