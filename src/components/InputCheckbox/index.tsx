import React from 'react';
import { CheckboxProps } from './types';

function InputCheckbox({ checked, handleOnChange, text, name }: CheckboxProps) {
  return (
    <label>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      />
      {text}
    </label>
  );
}

export default InputCheckbox;
