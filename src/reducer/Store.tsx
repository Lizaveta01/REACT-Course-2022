import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducer/Reducer';

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
