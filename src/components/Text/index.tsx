import React from 'react';
import { TextStyled } from './styles';
import { TextProps } from './types';

function Text({ children, color, fontWeight, size, maxWidth }: TextProps) {
  return (
    <TextStyled
      color={color}
      fontWeight={fontWeight}
      size={size}
      maxWidth={maxWidth}
    >
      {children}
    </TextStyled>
  );
}

export default Text;
