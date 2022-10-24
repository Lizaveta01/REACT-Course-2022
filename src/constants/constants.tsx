export enum Word {
  ALIEN = 'alien',
  HUMAN = 'human',
  ACTIVE = 'active',
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
