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

export enum Words {
  SEARCH = 'search',
  ALIVE = 'Alive',
  DEAD = 'Dead',
}

export enum ClassCSS {
  ACTIVE = 'active',
  DEAD = 'dead',
}
