import { configureStore } from '@reduxjs/toolkit';

import fetch_data from './slices/fetchDataSliсe';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: { fetch_data, filter },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
