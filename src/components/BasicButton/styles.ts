import styled from 'styled-components';
import { StyeProps } from './types';

export const Button = styled.button<StyeProps>`
  padding: 12px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border: 0;
  :disabled {
    background-color: gray;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;
