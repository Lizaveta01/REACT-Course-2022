import React, { useContext } from 'react';
import { createContext, ReactElement, useReducer } from 'react';
import { IChar } from '../constants/constants';

interface IContext {
  search: string;
  setSearch: (text: string) => void;
  cards: IChar[];
  setCards: (cards: IChar[]) => void;
  gender: string;
  setGender: (text: string) => void;
  page: number;
  setPage: (text: number) => void;
  status: string;
  setStatus: (text: string) => void;
  species: string;
  setSpecies: (text: string) => void;
  countCardInPage: number;
  setCountCards: (text: number) => void;
}
type State = {
  search: string;
  cards: IChar[];
  page: number;
  gender: string;
  status: string;
  species: string;
  countCardInPage: number;
};

const SET_SEARCH = 'search';
const SET_CARDS = 'cards';
const SET_PAGE = 'page';
const SET_GENDER = 'gender';
const SET_STATUS = 'status';
const SET_SPECIES = 'species';
const SET_COUNT_CARD_IN_PAGE = 'count card';

type Props = {
  children: ReactElement;
};

type Action =
  | { type: 'search'; search: string }
  | { type: 'cards'; cards: IChar[] }
  | { type: 'page'; page: number }
  | { type: 'gender'; gender: string }
  | { type: 'status'; status: string }
  | { type: 'species'; species: string }
  | { type: 'count card'; count: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.search };
    case SET_CARDS:
      return { ...state, cards: action.cards };
    case SET_GENDER:
      return { ...state, gender: action.gender };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_SPECIES:
      return { ...state, species: action.species };
    case SET_COUNT_CARD_IN_PAGE:
      return { ...state, count: action.count };
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
    gender: '',
    page: 1,
    status: '',
    species: '',
    countCardInPage: 20,
  });

  const setSearch = (search: string) => {
    dispatch({ type: SET_SEARCH, search });
  };
  const setCards = (cards: IChar[]) => {
    dispatch({ type: SET_CARDS, cards });
  };
  const setGender = (gender: string) => {
    dispatch({ type: SET_GENDER, gender });
  };
  const setPage = (page: number) => {
    dispatch({ type: SET_PAGE, page });
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

  return (
    <AppContext.Provider
      value={{
        search: state.search,
        setSearch,
        cards: state.cards,
        setCards,
        gender: state.gender,
        setGender,
        page: state.page,
        setPage,
        status: state.status,
        setStatus,
        species: state.species,
        setSpecies,
        countCardInPage: state.countCardInPage,
        setCountCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
