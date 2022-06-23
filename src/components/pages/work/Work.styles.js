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
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${margins.md};
  font-family: ${fonts.font1};
  font-size: ${sizes.lg};
  font-weight: 200;
  margin-bottom: ${margins.xs};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Context = styled.p`
  line-height: 2;
  flex-direction: column;
  display: flex;
  text-align: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  margin-bottom: ${margins.xss};
`;
export const Challenges = styled.p`
  line-height: 2;
  display: inline;
  text-align: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  margin-bottom: ${margins.xss};
`;
export const User = styled.p`
  line-height: 2;
  display: inline;
  text-align: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  margin-bottom: ${margins.xss};
`;
export const Process = styled.p`
  line-height: 2;
  display: inline;
  text-align: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
`;
export const Tools = styled.p`
  line-height: 2;
  display: inline;
  font-weight: 400;
  text-align: center;
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
