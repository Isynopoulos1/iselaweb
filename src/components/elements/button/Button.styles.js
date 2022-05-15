import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const BtnForm = styled.button`
  width: 100px;
  height: 30px;
  color: ${colors.lightergray};
  border-radius: 100px;
  border: 1px solid ${colors.lightergray};
  background-color: ${colors.white};
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  cursor: pointer;
  &:hover {
    background-color: ${colors.btngray};
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
`;
