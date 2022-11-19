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

export enum Common {
  FIRST_PAGE = 1,
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
