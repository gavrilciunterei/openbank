import React from 'react';
import ContentContainer from '../ContentContainer';
import { ButtonsContainer, Line } from './styles';
import { BottomButtonsProps } from './types';

function BottomButtons({ children }: BottomButtonsProps) {
  return (
    <div>
      <Line />
      <ContentContainer>
        <ButtonsContainer>{children}</ButtonsContainer>
      </ContentContainer>
    </div>
  );
}

export default BottomButtons;
