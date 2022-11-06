import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../utils/customHooks';
import {
  CARDS_FETCHING,
  SET_SEARCH,
  SET_GENDER,
  SET_STATUS,
  SET_SPECIES,
  SET_PAGE,
  SET_CURRENT_PAGE,
  SET_COUNT_CARD_IN_PAGE,
  SET_CARDS_NUMBER,
  SET_INTERVAL,
} from './actionTypes';

export const fetchCards = createAsyncThunk(CARDS_FETCHING, async (url: string) => {
  const { request } = useHttp();
  return request(url);
});

export const setSearch = createAction<string>(SET_SEARCH);
export const setGender = createAction<string>(SET_GENDER);
export const setStatus = createAction<string>(SET_STATUS);
export const setSpecies = createAction<string>(SET_SPECIES);
export const setPage = createAction<number>(SET_PAGE);
export const setCurrentPage = createAction<number>(SET_CURRENT_PAGE);
export const setCardsCountInPage = createAction<number>(SET_COUNT_CARD_IN_PAGE);

export const setCardsNumber = createAction<number>(SET_CARDS_NUMBER);

export const setInterval = createAction(SET_INTERVAL, withPayloadType<interval>());

function withPayloadType<T extends interval>() {
  return (t: T) => ({
    payload: {
      start: t.start,
      end: t.end,
    },
  });
}

type interval = {
  start: number;
  end: number;
};
