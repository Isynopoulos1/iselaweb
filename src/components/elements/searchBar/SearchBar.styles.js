import styled from "styled-components";
import{spacing, colors} from "../../../styles/index"

export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid ${colors.test3};
  border-radius: 50px;
  padding:${spacing.tiny};
  margin-bottom:${spacing.xs};


  &:focus {
    outline: none;
    color:black;
    border: 1px solid ${colors.test4};
  }
  &::placeholder {
    color:#80808070;
    
    
  }
`;
