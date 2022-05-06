import styled from "styled-components";

import { colors } from "@styles";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  width: auto;
  height: 30px;
  background-color: red;
`;

export const Copyright = styled.div`
  font-size: 10px;
  color: ${colors.white};
`;
