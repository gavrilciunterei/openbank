import React from 'react';
import { Button } from './styles';
import { BasicButtonProps } from './types';

function BasicButton({
  text,
  onClick,
  backgroundColor,
  color,
  disabled,
  type,
}: BasicButtonProps) {
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      type={type ? type : 'button'}
    >
      {text}
    </Button>
  );
}

export default BasicButton;
