import { createReducer } from '@reduxjs/toolkit';

import {
  setCardsCountInPage,
  setCurrentPage,
  fetchCards,
  setSearch,
  setGender,
  setSpecies,
  setStatus,
  setPage,
  setInterval,
  setCardsNumber,
} from '../actions/actions';
import { IChar } from '../constants/constants';

export interface IReducerState {
  cards: IChar[] | [];
  search: string;
  gender: string;
  status: string;
  species: string;
  cardsNumber: number;
  page: number;
  currentPage: number;
  countCardInPage: number;
  interval: {
    start: number;
    end: number;
  };
  loadingStatus: string;
}

const initialState: IReducerState = {
  cards: [],
  search: '',
  gender: '',
  status: '',
  species: '',
  cardsNumber: 0,
  page: 1,
  currentPage: 1,
  countCardInPage: 20,
  interval: {
    start: 0,
    end: 20,
  },
  loadingStatus: 'idle',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCards.pending, (state) => {
      state.loadingStatus = 'loading';
    })
    .addCase(fetchCards.fulfilled, (state, action) => {
      state.loadingStatus = 'idle';
      state.cards = action.payload.results;
      state.cardsNumber = action.payload.info.count;
    })
    .addCase(fetchCards.rejected, (state) => {
      state.loadingStatus = 'error';
    })
    .addCase(setSearch, (state, action) => {
      state.search = action.payload;
    })
    .addCase(setGender, (state, action) => {
      state.gender = action.payload;
    })
    .addCase(setStatus, (state, action) => {
      state.status = action.payload;
    })
    .addCase(setSpecies, (state, action) => {
      state.species = action.payload;
    })
    .addCase(setPage, (state, action) => {
      state.page = action.payload;
    })
    .addCase(setCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(setCardsCountInPage, (state, action) => {
      state.countCardInPage = action.payload;
    })
    .addCase(setCardsNumber, (state, action) => {
      state.cardsNumber = action.payload;
    })
    .addCase(setInterval, (state, action) => {
      state.interval.start = action.payload.start;
      state.interval.end = action.payload.end;
    })
    .addDefaultCase(() => {});
});

export default reducer;
