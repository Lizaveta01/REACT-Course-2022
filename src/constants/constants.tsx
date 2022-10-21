export enum Word {
  ALIEN = 'alien',
  HUMAN = 'human',
  SEARCH = 'search',
  ALIVE = 'Alive',
  DEAD = 'Dead',
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

export enum ClassCSS {
  ACTIVE = 'active',
  DEAD = 'dead',
}
