import styled from "styled-components";
import { colors } from "@styles";

export const Icon = styled.svg`
  transition: all 0.3s ease;
  &:hover {
    fill: ${colors.lightgray};
  }
`;
