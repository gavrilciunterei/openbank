import styled from 'styled-components';
import { TextContainerProps } from './types';

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  width: 100%;
  margin-top: 15px;
  flex-direction: ${(props) =>
    props.flexDirectionMin ? props.flexDirectionMin : 'row'};
  @media (min-width: 850px) {
    flex-direction: ${(props) =>
      props.flexDirectionMax ? props.flexDirectionMax : 'row'};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 10px;
`;

export const Container = styled.div`
  flex: 1;
`;
