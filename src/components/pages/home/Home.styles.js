import styled from "styled-components";
import { colors, sizes, fonts, margins } from "@styles";

export const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const MainVideo = styled.video`
  display: flex;
  margin-top: ${margins.xs};
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  @media only screen and (max-width: 700px) {
    max-width: 600px;
    margin-top: ${margins.sm};
  }
`;
