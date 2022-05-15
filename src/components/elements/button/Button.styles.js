import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const BtnForm = styled.button`
  width: 100px;
  height: 30px;
  color: ${colors.lightgray};
  border-radius: 100px;
  border: 1px solid ${colors.lightgray};
  background-color: ${colors.white};
  font-family: ${fonts.font1};
  &:hover {
    background-color: ${colors.btngray};
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
`;
