import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  display: flex;
  width: 600px;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.lightergray};
  margin-bottom: 20px;
  font-family: ${fonts.font1};
  font-size: ${sizes.sm};
  font-weight: 200;
  &:hover {
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
  &:focus {
    outline: none;
  }
`;

export const TextAreaStyle = styled.textarea`
  display: flex;
  height: 200px;
  font-family: ${fonts.font1};
  padding-top: 10px;
  font-size: ${sizes.sm};
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.lightergray};
  margin-bottom: 20px;
  font-weight: 200;
  &:hover {
    border: 1px solid ${colors.black};
    color: ${colors.black};
  }
  &:focus {
    outline: none;
  }
`;
