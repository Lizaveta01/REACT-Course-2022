import React from 'react';
import { createContext, ReactElement, useReducer } from 'react';
import { IChar } from '../constants/constants';

interface IContext {
  search: string;
  setSearch: (text: string) => void;
  cards: IChar[];
  setCards: (cards: IChar[]) => void;
  page: number;
  setPage: (text: number) => void;
  status: string;
  setStatus: (text: string) => void;
  species: string;
  setSpecies: (text: string) => void;
  planet: string;
  setPlanet: (text: string) => void;
  countCardInPage: number;
  setCountCards: (text: number) => void;
}
type State = {
  search: string;
  cards: IChar[];
  page: number;
  status: string;
  species: string;
  planet: string;
  countCardInPage: number;
};

const SET_SEARCH = 'search';
const SET_CARDS = 'cards';
const SET_PAGE = 'page';
const SET_STATUS = 'status';
const SET_SPECIES = 'species';
const SET_PLANET = 'planet';
const SET_COUNT_CARD_IN_PAGE = 'count card';

type Props = {
  children: ReactElement;
};

type Action =
  | { type: 'search'; search: string }
  | { type: 'cards'; cards: IChar[] }
  | { type: 'page'; page: number }
  | { type: 'status'; status: string }
  | { type: 'species'; species: string }
  | { type: 'planet'; planet: string }
  | { type: 'count card'; count: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.search };
    case SET_CARDS:
      return { ...state, cards: action.cards };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_SPECIES:
      return { ...state, species: action.species };
    case SET_PLANET:
      return { ...state, planet: action.planet };
    case SET_COUNT_CARD_IN_PAGE:
      return { ...state, count: action.count };
    default:
      return state;
  }
};

export const AppContext = createContext({} as IContext);

export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    search: '',
    cards: [],
    page: 1,
    status: '',
    species: '',
    planet: '',
    countCardInPage: 20,
  });

  const setSearch = (search: string) => {
    dispatch({ type: SET_SEARCH, search });
  };
  const setCards = (cards: IChar[]) => {
    dispatch({ type: SET_CARDS, cards });
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
  const setPlanet = (planet: string) => {
    dispatch({ type: SET_PLANET, planet });
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
        page: state.page,
        setPage,
        status: state.status,
        setStatus,
        species: state.species,
        setSpecies,
        planet: state.planet,
        setPlanet,
        countCardInPage: state.countCardInPage,
        setCountCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
