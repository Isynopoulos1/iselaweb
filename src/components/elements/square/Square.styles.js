import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const SquareWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - 2px - 12px);
  aspect-ratio: 1/1;
  border: 1px solid #eee;
  margin-bottom: 12px;
  &:nth-child(2n + 1) {
    margin-right: 12px;
  }
  @media only screen and (max-width: 1000px) {
    width: calc(100% - 2px - 12px);
  }
`;

export const SquareImage = styled.img`
  position: relative;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
