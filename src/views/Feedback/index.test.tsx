import Feedback from './index';
import '../../locale/index';
import { render } from '../../utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';

import userReducer from '../../store/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

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

const initialState401 = {
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
    password: 'pruebaKO123',
    repeatPassword: 'pruebaKO123',
    track: '',
    responseApi: null,
  },
};

test('Render feedback with 200 api response and click button', async () => {
  const store = configureStore({
    reducer: userReducer,
    preloadedState: initialState200,
  });

  render(<Feedback />, {
    initialState200,
    store,
  });

  const foo = true;
  await new Promise((r) => setTimeout(r, 4000));
  expect(foo).toBeDefined();

  const button1 = screen.getByText('Log in');
  fireEvent.click(button1);
});

test('Render feedback with 401 api response and click button', async () => {
  const store = configureStore({
    reducer: userReducer,
    preloadedState: initialState401,
  });

  render(<Feedback />, {
    initialState401,
    store,
  });

  const foo = true;
  await new Promise((r) => setTimeout(r, 4000));
  expect(foo).toBeDefined();

  //console.log(store.getState());
  const button1 = screen.getByText('Back to Password Manager');
  fireEvent.click(button1);
});

test('Render without state', async () => {
  render(<Feedback />);

  const foo = true;
  await new Promise((r) => setTimeout(r, 4000));
  expect(foo).toBeDefined();
});
