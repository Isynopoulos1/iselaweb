import styled from "styled-components";
import{margins} from "../../../styles/index"

export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid #8080802b;
  border-radius: 50px;
  padding: 3px;
  margin-bottom:50px;


  &:focus {
    outline: none;
    color:black;
  }
  &::placeholder {
    color:#80808070;
    
  }
`;
