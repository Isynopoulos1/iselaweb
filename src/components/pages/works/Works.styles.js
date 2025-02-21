import styled from "styled-components";
import { colors, sizes, fonts, spacing } from "@styles";

export const WorkContainer = styled.main`
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.sm};
  padding: 0px 50px;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-family: ${fonts.font1};
  font-weight: 200;
  font-size: ${sizes.xs};
  grid-gap: 20px;
  margin-bottom: 40px;

`;
export const Covers = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
`;
export const SearchProjects = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  
`;