import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
  'user/getAll',
  async (data, { rejectWithValue }) => {
    try {
      //const allCharacters = await Characters.getAll(data.serie);
      return 'ok';
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
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
  },
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
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      state.getAllLoading = true;
      state.getAllError = null;
    },
    [getAll.fulfilled]: (state, action) => {
      state.allCharacters = action.payload.data;
      state.getAllLoading = false;
      state.getAllError = null;
    },
    [getAll.rejected]: (state, action) => {
      state.getAllLoading = false;
      state.getAllError = action.payload.error;
    },
  },
});

export default userSlice;
