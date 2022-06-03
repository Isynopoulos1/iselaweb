import styled from "styled-components";
import { colors, sizes, fonts, margins } from "@styles";

export const WorkContainer = styled.main`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${margins.sm};
  padding: 0px 50px;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: ${fonts.font1};
  font-weight: 200;
  font-size: ${sizes.xs};
  grid-gap: 20px;
  margin-bottom: 70px;
`;
export const Covers = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;
