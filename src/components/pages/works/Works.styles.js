import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const WorkContainer = styled.main`
  width: calc(100% - 100px);
  align-items: center;
  justify-content: center;
  margin-top: 150px;
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
