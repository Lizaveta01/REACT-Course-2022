import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  gender: '',
  status: '',
  species: '',
  page: 1,
  currentPage: 1,
  countCardInPage: 20,
  interval: {
    start: 0,
    end: 20,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSpecies: (state, action) => {
      state.species = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCardsCountInPage: (state, action) => {
      state.countCardInPage = action.payload;
    },
    setCardsNumber: (state, action) => {
      state.cardsNumber = action.payload;
    },
    setCardInterval: (state, action) => {
      state.interval.start = action.payload.start;
      state.interval.end = action.payload.end;
    })
  },
});

const { actions, reducer } = fetchDataSlice;
export const { pending } = actions;
export default reducer;