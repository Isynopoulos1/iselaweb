import styled from "styled-components";
import { colors, sizes } from "@styles";

export const BtnWrapper = styled.button`
  width: 120px;
  height: 30px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightgray};
  border-radius: 100px;
  font-size: ${sizes.sm};
  color: ${colors.lightgray};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: black;
    border: 1px solid ${colors.black};
  }
`;
