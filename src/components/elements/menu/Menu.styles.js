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
`;

export const MenuStyleTop = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2px;
  background: black;
  border-radius: 4px;
  transition: transform 0.65s;
`;
export const MenuStyleBottom = styled.div`
  width: 100%;
  height: 2px;
  background: black;
  border-radius: 4px;
  transform: translateY(15px);
`;
