import styled from "styled-components";
import{margins, colors} from "../../../styles/index"

export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid ${colors.test3};
  border-radius: 50px;
  padding: 5px;
  margin-bottom:50px;


  &:focus {
    outline: none;
    color:black;
    border: 1px solid ${colors.test4};
  }
  &::placeholder {
    color:#80808070;
    
    
  }
`;
