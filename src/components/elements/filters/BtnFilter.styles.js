import styled from "styled-components";
import { colors, sizes } from "@styles";

export const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    position: absolute;
    right: ${sizes.xs};
    width: ${sizes.xs};
  }
  & button {
    position: relative;
    height: 30px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightergray};
    border-radius: 100px;
    font-size: ${sizes.sm};
    color: ${colors.lightergray};
    cursor: pointer;
    transition: all 0.3s ease;
    width: 140px;

    &:hover {
      background-color: ${colors.btngray};
      border: 1px solid ${colors.black};
      color: ${colors.black};
    }
  }
`;
