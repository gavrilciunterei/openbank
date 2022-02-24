import React from 'react';
import { Button } from './styles';
import { BasicButtonProps } from './types';

function BasicButton({
  text,
  onClick,
  backgroundColor,
  color,
  disabled,
}: BasicButtonProps) {
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default BasicButton;
