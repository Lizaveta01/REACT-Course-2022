export enum Word {
  ALIEN = 'alien',
  HUMAN = 'human',
  SEARCH = 'search',
  ALIVE = 'Alive',
  DEAD = 'Dead',
  ENTER = 'Enter',
  SPECIES = 'Species',
  STATUS = 'Status',
  GENDER = 'Gender',
  COUNT_CARDS = 'Count cards',
}

export enum ClassCSS {
  ACTIVE = 'active',
  DEAD = 'dead',
}

export enum HttpRequests {
  GET = 'GET',
  TYPE = 'application/json',
}

export enum Interval {
  DEFAULT = 0,
}

export enum Cards {
  DEFAUL_COUNT_REQUEST = 20,
  COUNT_20 = 20,
  COUNT_10 = 10,
  COUNT_4 = 4,
  DEFAULT_PAGE_1 = 1,
  DIVIDE_NUM_2 = 2,
  DIVIDE_NUM_5 = 5,
}

export interface IChar {
  id: number;
  name: string;
  status: string;
  gender: string;
  species: string;
  origin: {
    name: string;
  };
  image: string;
}
