import styled from "styled-components";
import { colors, sizes } from "@styles";

export const HeaderContainer = styled.header`
  width: calc(100% - 100px);
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  padding: 20px 50px;
  justify-content: space-between;
  font-size: ${sizes.md};

  background-color: white;
`;
