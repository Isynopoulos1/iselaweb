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
export const ContentContainer = styled.div`
  display: flex;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.p`
  padding: 50px;
  line-height: 20px;
  display: inline;
  text-align: center;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
`;
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProjectImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const VideoContainer = styled.div`
  display: flex;
`;
export const ProjectVideo = styled.video`
  display: flex;
  width: 100%;
`;
