import React from 'react';
import { TextStyled } from './styles';
import { TextProps } from './types';
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

function InputSimple({ label, ...props }: Props) {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </div>
  );
}

export default InputSimple;
