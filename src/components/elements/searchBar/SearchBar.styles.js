import styled from "styled-components";


export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid black;
  border-radius: 50px;
  padding: 3px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: gray;
  }
`;
