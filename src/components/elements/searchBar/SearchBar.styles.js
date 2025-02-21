import styled from "styled-components";
import{spacing, colors} from "../../../styles/index"

export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid ${colors.softLilac};
  border-radius: 50px;
  padding:${spacing.tiny};
  margin-bottom:${spacing.xs};


  &:focus {
    outline: none;
    color:black;
    border: 1px solid hsla(250, 100%, 84%, 1);
  }
  &::placeholder {
    color:${colors.lightergray};
    
    
  }
`;
