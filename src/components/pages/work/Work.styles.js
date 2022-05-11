import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const WorkContainer = styled.div`
  position: relative;
  width: calc(100% - 100px);
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  padding: 20px 50px;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: ${fonts.font1};
  font-weight: 200;
  font-size: ${sizes.xs};
  grid-gap: 15px;
`;
export const BtnFilter = styled.div``;
