import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';

export const initialState: User = {
  activePage: 0,
  policyChecked: false,
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
  password: '',
  repeatPassword: '',
  track: '',
  responseApi: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
    setDonePage(state, action) {
      const { page, done } = action.payload;
      if (done === true) {
        state.pages[page] = { done: true, text: '✓' };
      } else {
        state.pages[page] = { done: false, text: page + 1 };
      }
    },
    setCheckPolicy(state, action) {
      state.policyChecked = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
      state.repeatPassword = action.payload.repeatPassword;
      state.track = action.payload.track;
    },
    setResponseApi(state, action) {
      state.responseApi = action.payload;
    },
    cleanData: () => initialState,
    resetPassword: (state) => {
      state.password = '';
      state.repeatPassword = '';
      state.track = '';
      state.responseApi = null;
    },
  },
});

export const {
  setActivePage,
  setDonePage,
  setCheckPolicy,
  setPassword,
  setResponseApi,
  cleanData,
  resetPassword,
} = userSlice.actions;
export default userSlice.reducer;
