import { createSlice } from '@reduxjs/toolkit';
import { IChar } from '../../constants/constants';

interface IFetchDataSlice {
  isLoading: boolean;
  isError: boolean;
  cards: IChar[] | [];
  cardsNumber: number;
}

const initialState: IFetchDataSlice = {
  isLoading: false,
  isError: false,
  cards: [],
  cardsNumber: 0,
};

const fetchDataSlice = createSlice({
  name: 'fetch_data',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setCards: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cards = action.payload.results;
      state.cardsNumber = action.payload.info.count;
    },
    setError: (state) => {
      state.cards = [];
      state.isLoading = false;
    },
    setCardsNumber: (state, action) => {
      state.cardsNumber = action.payload;
    },
  },
});

const { actions, reducer } = fetchDataSlice;
export const { setLoading, setCardsNumber, setCards, setError } = actions;
export default reducer;
