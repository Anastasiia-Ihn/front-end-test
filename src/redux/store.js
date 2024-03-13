import { authReducer } from './auth/authSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
