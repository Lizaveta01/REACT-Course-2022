export enum Word {
  ALIEN = 'alien',
  HUMAN = 'human',
  SEARCH = 'search',
  ALIVE = 'Alive',
  DEAD = 'Dead',
  ENTER = 'Enter',
}

export enum ClassCSS {
  ACTIVE = 'active',
  DEAD = 'dead',
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

type ApiState = {
  searchValue: string;
  cards: IChar[];
  page: number;
  currentPage: number;
  status: string;
  species: string;
  gender: string;
  sortNumber: string;
  interval: {
    start: number;
    end: number;
  };
};
