import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IChar } from '../constants/constants';
import { useHttp } from '../utils/customHooks';

export const SET_CARDS = 'SET_CARDS';
export const CARDS_FETCHING = 'CARDS_FETCHING';
export const SET_ERROR = 'SET_ERROR';

export const SET_CARDS_NUMBER = 'SET_CARDS_NUMBER';
export const SET_PAGE = 'SET_PAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const SET_FILTER = 'SET_FILTER';

export const SET_COUNT_CARD_IN_PAGE = 'SET_COUNT_CARD_IN_PAGE';
export const SET_INTERVAL = 'SET_INTERVAL';

export const fetchCards = createAsyncThunk(CARDS_FETCHING, async (url: string) => {
  const { request } = useHttp();
  const res = await request(url);
  return request(url);
});

export const cardsFetching = createAction(CARDS_FETCHING);
export const setCards = createAction<IChar[]>(SET_CARDS);
export const setError = createAction(SET_ERROR);

export const setSearch = createAction<string>('SET_SEARCH');
export const setGender = createAction<string>('SET_GENDER');
export const setStatus = createAction<string>('SET_STATUS');
export const setSpecies = createAction<string>('SET_SPECIES');
export const setPage = createAction<number>('SET_PAGE');
export const setCurrentPage = createAction<number>('SET_CURRENT_PAGE');
export const setCardsCountInPage = createAction<number>(SET_COUNT_CARD_IN_PAGE);
export const setIntervalStart = createAction<number>('SET_INTERVAL_START');
export const setIntervalEnd = createAction<number>('SET_INTERVAL_END');
export const setCardsNumber = createAction<number>(SET_CARDS_NUMBER);
