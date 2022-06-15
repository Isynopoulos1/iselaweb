import styled from "styled-components";
import { colors, sizes } from "@styles";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  background-color: ${colors.white};
  top: 0;
  z-index: 3;
`;

export const SubContainer = styled.div`
  display: flex;
  max-width: 1200px;
  align-items: center;
  padding: 20px 50px;
  justify-content: space-between;
  font-size: ${sizes.md};
  margin: 0 auto;
  & a,
  div {
    z-index: 3;
  }
`;
