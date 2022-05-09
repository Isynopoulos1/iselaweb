import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30px;
  height: 10px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  & .hamburger-react > * {
    height: 2px !important;
  }
`;
