import React from 'react';
import Dropdown from './index';
import '../../locale/index';
import { render, screen, fireEvent } from '@testing-library/react';

it('Test Dropdown', () => {
  render(<Dropdown />);

  const button = screen.getByText('en');
  fireEvent.click(button);

  const button2 = screen.getByText('Spanish');
  fireEvent.click(button2);

  const button3 = screen.getByText('Inglés');
  fireEvent.click(button3);
});
