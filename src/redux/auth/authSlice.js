import { logIn, logOut, signup } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  user: { username: '', email: '' },
  isLoggedIn: false,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
