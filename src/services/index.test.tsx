import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { submitForm } from './api';

test('Test Api 200', async () => {
  const test = await submitForm('Contasena1234', 'Contasena1234', 'test');
  expect(test).toStrictEqual({ status: 200 });
});

// test('Test Api 401', async () => {
//   const test = await submitForm('pruebaKO123', 'pruebaKO123', 'test');
//   await expect(test).rejects.toStrictEqual({ status: 200 });
// });
