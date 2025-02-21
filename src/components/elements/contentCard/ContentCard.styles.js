import styled from "styled-components";
import { colors, sizes, fonts, spacing } from "@styles";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const Content= styled.div`
  line-height: 2;
  border: 1px solid hsla(250, 100%, 84%, 1);
  font-size: ${sizes.sm};
  font-family: ${fonts.font1};
  font-weight: 300;
  width:100%;
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: 5px;
`
export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.xss};
  max-height: 220px;
  gap: ${spacing.xsss};
`
export const Emoji =styled.p`
  font-size: 25px;
`;
