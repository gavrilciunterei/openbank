import React from 'react';
import { InputContainer, InputLabel, ValidationTextField } from './styles';
import { ErrorMessage, useField } from 'formik';
import { strengthIndicator, strengthColor } from './strength';

interface Props {
  password?: boolean;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  [x: string]: any;
}

function InputSimple({ label, ...props }: Props) {
  const [field, meta] = useField(props);

  const strength = strengthIndicator(field.value);
  const color = strengthColor(strength);

  const getColor = () => {
    if (props.password) {
      return color;
    } else if (meta.error) {
      return 'red';
    } else {
      return '';
    }
  };

  return (
    <InputContainer>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>

      <ValidationTextField
        className="text-input"
        {...field}
        {...props}
        color={getColor()}
      />
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
