/* eslint-disable testing-library/no-wait-for-side-effects */
import Form from './index';

import '../../locale/index';
import { screen, fireEvent, waitFor } from '@testing-library/react';

import { render } from '../../utils/test-utils';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../store/rootReducer';

const initialState200 = {
  user: {
    activePage: 0,
    policyChecked: true,
    pages: [
      {
        done: false,
        text: '1',
      },
      {
        done: false,
        text: '2',
      },
      {
        done: false,
        text: '3',
      },
    ],
    password: 'Hola12345',
    repeatPassword: 'Hola12345',
    track: '',
    responseApi: null,
  },
};
test('Render Form enter passwords', async () => {
  render(<Form />);

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

test('Render Form when go back from feedback', async () => {
  const store = configureStore({
    reducer: userReducer,
    preloadedState: initialState200,
  });

  render(<Form />, {
    initialState200,
    store,
  });
});
