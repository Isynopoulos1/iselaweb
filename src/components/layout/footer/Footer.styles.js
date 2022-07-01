import styled from "styled-components";

import { colors, sizes } from "@styles";

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${colors.white};
`;

export const Copyright = styled.div`
  font-size: ${sizes.xss};
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 200;
`;
