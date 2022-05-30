import styled from "styled-components";
import { colors, sizes, fonts, margins } from "@styles";

export const HomeContainer = styled.div`
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
  width: 75%;
`;
