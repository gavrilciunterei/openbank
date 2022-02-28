import React from 'react';
import Text from '../Text';
import { BottomLine } from './styles';
import ContentContainer from '../ContentContainer';
import { TextProps } from './types';
function TextCreatePassword({ text }: TextProps) {
  return (
    <ContentContainer>
      <Text fontWeight={500} size="30px">
        {text}
      </Text>
      <BottomLine />
    </ContentContainer>
  );
}

export default TextCreatePassword;
