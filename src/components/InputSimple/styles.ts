import styled from 'styled-components';
import { StyeProps } from './types';

export const TextStyled = styled.p<StyeProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'lighter')};
  font-size: ${(props) => props.size};
  line-height: 1.2;
  max-width: ${(props) => props.maxWidth};
  color: ${(props) => props.color};
  margin-top: 0;
`;
