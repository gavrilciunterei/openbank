import styled from 'styled-components';
import { StyeProps } from './types';

export const Image = styled.img<StyeProps>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  margin: 15px;
`;
