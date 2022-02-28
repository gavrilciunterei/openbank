/* eslint-disable testing-library/no-wait-for-side-effects */
import Form from './index';
import { MemoryRouter } from 'react-router';

import store from '../../store/rootStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '../../locale/index';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Render ProductInformation', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Form />
      </Provider>
    </MemoryRouter>
  );

  const password = screen.getByPlaceholderText('Enter your password');
  const repeatPassword = screen.getByPlaceholderText('Repeat your password');

  await waitFor(() => {
    fireEvent.change(password, { target: { value: 'Hola12345' } });
    fireEvent.change(repeatPassword, { target: { value: 'Hola12345' } });

    const bottonNextPage = screen.getByText('Next');
    fireEvent.click(bottonNextPage);

    const buttonCancel = screen.getByText('Cancel');
    fireEvent.click(buttonCancel);
  });
});
