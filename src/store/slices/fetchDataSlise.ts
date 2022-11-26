import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingStatus: 'idle',
  cards: [],
  cardsNumber: 0,
};

const fetchDataSlice = createSlice({
  name: 'fetch_data',
  initialState,
  reducers: {
    pending: (state) => {
      state.loadingStatus = 'loading';
    },
    fulfilled: (state, action) => {
      state.loadingStatus = 'idle';
      state.cards = action.payload.results;
      state.cardsNumber = action.payload.info.count;
    },
    rejected: (state) => {
      state.loadingStatus = 'error';
    },
     setCardsNumber: (state, action) => {
        state.cardsNumber = action.payload;
      }
  },
});

const { actions, reducer } = fetchDataSlice;
export const { pending } = actions;
export default reducer;
