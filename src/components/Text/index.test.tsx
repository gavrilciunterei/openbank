import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Text from './index';

test('Text test', () => {
  render(<Text children={'Prueba de texto'} />);
  screen.getByText('Prueba de texto');
});
