import React from 'react';
import {
  InputContainer,
  InputLabel,
  SubTextContainer,
  ValidationTextField,
} from './styles';
import { ErrorMessage, useField } from 'formik';
import { strengthIndicator, strengthColor } from './strength';
import Text from '../Text';

interface Props {
  password?: boolean;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  [x: string]: any;
  subText?: React.ReactNode;
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

      {props.subText && <SubTextContainer>{props.subText}</SubTextContainer>}
      <Text color="red" fontWeight={300} size="13px" maxWidth="200">
        <ErrorMessage name={props.name} component="span" />
      </Text>
    </InputContainer>
  );
}

export default InputSimple;
