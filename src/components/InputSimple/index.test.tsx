import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FormCursom from '../FormCursom';
import InputSimple from './index';

test('Test InputSimple', () => {
  render(
    <FormCursom
      initialValues={{ password: 'Contrasena1234', texto: 'Hola' }}
      onSubmit={() => console.log('test ')}
      validationSchema={{}}
    >
      <InputSimple
        label="password"
        name="password"
        placeholder="password"
        type="password"
      />
    </FormCursom>
  );
});
