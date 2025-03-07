import styled from "styled-components";

import { colors, sizes, spacing } from "@styles";

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2 * ${spacing.xss});
  height: ${spacing.xs};
  background-color: ${colors.white};
  padding: ${spacing.xss};
  @media only screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
  }
`;

export const Copyright = styled.div`
  font-size: ${sizes.xss};
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;
