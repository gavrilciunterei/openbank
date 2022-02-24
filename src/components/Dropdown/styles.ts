import styled from 'styled-components';
import { StyeProps } from './types';

export const Image = styled.img<StyeProps>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  margin: 15px;
`;

export const Container = styled.div`
  position: relative;
  margin-right: 10px;
  align-self: center;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
`;

export const ButtonParent = styled.button`
  background-color: transparent;
  border: 0;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const LangButton = styled.button`
  background-color: transparent;
  border: 0;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
`;
