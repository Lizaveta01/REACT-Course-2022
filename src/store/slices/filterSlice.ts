import { createSlice } from '@reduxjs/toolkit';

interface IFilterSlice {
  search: string;
  gender: string;
  status: string;
  species: string;
  page: number;
  currentPage: number;
  countCardInPage: number;
  interval: {
    start: number;
    end: number;
  };
}

const initialState: IFilterSlice = {
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
    setCardInterval: (state, action) => {
      state.interval.start = action.payload.start;
      state.interval.end = action.payload.end;
    },
  },
});

const { actions, reducer } = filterSlice;
export const {
  setSearch,
  setGender,
  setStatus,
  setSpecies,
  setPage,
  setCurrentPage,
  setCardsCountInPage,
  setCardInterval,
} = actions;
export default reducer;
