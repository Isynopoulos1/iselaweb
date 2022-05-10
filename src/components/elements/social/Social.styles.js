import styled from "styled-components";
import { colors, sizes } from "@styles";

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  grid-gap: 3rem;
  cursor: pointer;
`;
export const BehanceLogo = styled.svg`
  color: black;

  &:hover {
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;
