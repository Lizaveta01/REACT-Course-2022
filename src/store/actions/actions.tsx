import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCards } from '../../service/getCards';

export const fetchCards = createAsyncThunk('fetch/cards', async (url: string) => {
  return getCards(url);
});
