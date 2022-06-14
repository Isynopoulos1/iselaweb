import styled from "styled-components";
import { colors, sizes } from "@styles";

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  align-items: center;
  padding: 20px 50px;
  justify-content: space-between;
  font-size: ${sizes.md};
  background-color: white;
  margin: 0 auto;
  max-width: 1200px;
  & a,
  div {
    z-index: 3;
  }
`;
