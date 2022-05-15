import styled from "styled-components";
import { colors, sizes, fonts } from "@styles";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  color: ${colors.black};
  margin-top: 150px;
`;
export const CtaForm = styled.h1`
  display: flex;
  color: ${colors.mediumgray};
  font-family: ${fonts.font1};
  font-size: ${sizes.lg};
  font-weight: 200;
  margin-bottom: 50px;
`;
