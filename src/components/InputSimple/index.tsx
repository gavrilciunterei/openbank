import React from 'react';
import { InputContainer, InputLabel, ValidationTextField } from './styles';
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

function InputSimple({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      <ValidationTextField className="text-input" {...field} {...props} />
      <div
        style={{
          maxWidth: 200,
          fontSize: 13,
          fontWeight: 'lighter',
          color: 'red',
        }}
      >
        <ErrorMessage name={props.name} component="span" />
      </div>
    </InputContainer>
  );
}

export default InputSimple;
