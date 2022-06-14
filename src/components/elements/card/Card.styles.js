import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  cursor: pointer;
`;

export const CardCover = styled.img`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  font-size: ${sizes.sm};
  color: ${colors.mediumgray};
  font-family: ${fonts.font1};
  font-weight: 400;
  text-decoration: none;
`;
