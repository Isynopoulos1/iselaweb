import styled from "styled-components";

import { colors } from "@styles";
import { sizes } from "@styles";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10px;
  margin-top: 100px;
`;

export const Copyright = styled.div`
  margin-top: 50px;
  font-size: ${sizes.xs};
  color: ${colors.black};
  font-family: "Roboto Flex", sans-serif;
  font-weight: 400;
`;
