import { TextField } from '@mui/material';
import styled from 'styled-components';
import { StyeProps } from './types';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px 15px 0px;
  max-width: 600px;
`;

export const InputLabel = styled.label`
  margin-top: 0;
`;

export const ValidationTextField = styled(TextField)({});
