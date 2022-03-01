import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { submitForm } from './api';

test('Test Api 200', async () => {
  const test = await submitForm('Contasena1234', 'Contasena1234', 'test');
  expect(test).toStrictEqual({ status: 200 });
});
