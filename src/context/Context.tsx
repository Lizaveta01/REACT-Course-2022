import React, { useContext } from 'react';
import { createContext, ReactElement, useReducer } from 'react';
import { IChar } from '../constants/constants';

interface IContext {
  search: string;
  setSearch: (text: string) => void;
  cards: IChar[];
  setCards: (cards: IChar[]) => void;
  cardsNumber: number;
  setCardsNumber: (number: number) => void;
  gender: string;
  setGender: (text: string) => void;
  page: number;
  setPage: (number: number) => void;
  currentPage: number;
  setCurrentPage: (number: number) => void;
  status: string;
  setStatus: (text: string) => void;
  species: string;
  setSpecies: (text: string) => void;
  countCardInPage: number;
  setCountCards: (number: number) => void;
  lastContentIndex: number;
  setLastIndex: (number: number) => void;
  firstContentIndex: number;
  setFirstIndex: (number: number) => void;
}

type State = {
  search: string;
  cards: IChar[];
  cardsNumber: number;
  page: number;
  currentPage: number;
  gender: string;
  status: string;
  species: string;
  countCardInPage: number;
  lastContentIndex: number;
  firstContentIndex: number;
};

type Props = {
  children: ReactElement;
};

type Action =
  | { type: 'search'; search: string }
  | { type: 'cards'; cards: IChar[] }
  | { type: 'cards number'; cardsNumber: number }
  | { type: 'page'; page: number }
  | { type: 'current page'; currentPage: number }
  | { type: 'gender'; gender: string }
  | { type: 'status'; status: string }
  | { type: 'species'; species: string }
  | { type: 'count card'; count: number }
  | { type: 'last index'; lastIndex: number }
  | { type: 'first index'; firstIndex: number };

const SET_SEARCH = 'search';
const SET_CARDS = 'cards';
const SET_CARDS_NUMBER = 'cards number';
const SET_PAGE = 'page';
const SET_CURRENT_PAGE = 'current page';
const SET_GENDER = 'gender';
const SET_STATUS = 'status';
const SET_SPECIES = 'species';
const SET_COUNT_CARD_IN_PAGE = 'count card';
const SET_LAST_INDEX = 'last index';
const SET_FIRST_INDEX = 'first index';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.search };
    case SET_CARDS:
      return { ...state, cards: action.cards };
    case SET_CARDS_NUMBER:
      return { ...state, cardsNumber: action.cardsNumber };
    case SET_GENDER:
      return { ...state, gender: action.gender };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_SPECIES:
      return { ...state, species: action.species };
    case SET_COUNT_CARD_IN_PAGE:
      return { ...state, countCardInPage: action.count };
    case SET_LAST_INDEX:
      return { ...state, lastContentIndex: action.lastIndex };
    case SET_FIRST_INDEX:
      return { ...state, firstContentIndex: action.firstIndex };
    default:
      return state;
  }
};

export const AppContext = createContext({} as IContext);

export const useMyContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    search: '',
    cards: [],
    cardsNumber: 0,
    gender: '',
    page: 1,
    currentPage: 1,
    status: '',
    species: '',
    countCardInPage: 20,
    lastContentIndex: 20,
    firstContentIndex: 0,
  });

  const setSearch = (search: string) => {
    dispatch({ type: SET_SEARCH, search });
  };
  const setCards = (cards: IChar[]) => {
    dispatch({ type: SET_CARDS, cards });
  };
  const setCardsNumber = (cardsNumber: number) => {
    dispatch({ type: SET_CARDS_NUMBER, cardsNumber });
  };
  const setGender = (gender: string) => {
    dispatch({ type: SET_GENDER, gender });
  };
  const setPage = (page: number) => {
    dispatch({ type: SET_PAGE, page });
  };
  const setCurrentPage = (currentPage: number) => {
    dispatch({ type: SET_CURRENT_PAGE, currentPage });
  };
  const setStatus = (status: string) => {
    dispatch({ type: SET_STATUS, status });
  };
  const setSpecies = (species: string) => {
    dispatch({ type: SET_SPECIES, species });
  };
  const setCountCards = (count: number) => {
    dispatch({ type: SET_COUNT_CARD_IN_PAGE, count });
  };
  const setLastIndex = (lastIndex: number) => {
    dispatch({ type: SET_LAST_INDEX, lastIndex });
  };
  const setFirstIndex = (firstIndex: number) => {
    dispatch({ type: SET_FIRST_INDEX, firstIndex });
  };

  return (
    <AppContext.Provider
      value={{
        search: state.search,
        setSearch,
        cards: state.cards,
        setCards,
        cardsNumber: state.cardsNumber,
        setCardsNumber,
        gender: state.gender,
        setGender,
        page: state.page,
        setPage,
        currentPage: state.currentPage,
        setCurrentPage,
        status: state.status,
        setStatus,
        species: state.species,
        setSpecies,
        countCardInPage: state.countCardInPage,
        setCountCards,
        lastContentIndex: state.lastContentIndex,
        setLastIndex,
        firstContentIndex: state.firstContentIndex,
        setFirstIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
