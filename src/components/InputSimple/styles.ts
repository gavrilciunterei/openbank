import styled from 'styled-components';
import { StyleProps } from './types';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px 15px 0px;
  max-width: 600px;
`;

export const InputLabel = styled.label`
  margin-top: 0;
`;

export const ValidationTextField = styled.input<StyleProps>`
  padding: 10px;
  border-radius: 3px;
  border-style: solid;
  border-bottom-color: ${(props) => (props.color ? props.color : 'gray')};

  :focus {
    outline: none !important;
  }
`;
