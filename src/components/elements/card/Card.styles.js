import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 400px;
`;

export const CardCover = styled.img`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  height: 350px;
  width: 100%;
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: ${sizes.sm};
  color: ${colors.mediumgray};
  font-family: ${fonts.font1};
  font-weight: 400;
`;
