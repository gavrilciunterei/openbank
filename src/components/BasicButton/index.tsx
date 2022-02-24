import React from 'react';
import { Button, ButtonDiv } from './styles';
import { BasicButtonProps } from './types';

function BasicButton({
  text,
  onClick,
  backgroundColor,
  color,
  disabled,
  type,
  icon,
}: BasicButtonProps) {
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      type={type ? type : 'button'}
    >
      <ButtonDiv>
        {text}
        {icon}
      </ButtonDiv>
    </Button>
  );
}

export default BasicButton;
