export enum Word {
  ALIEN = 'alien',
  HUMAN = 'human',
  ACTIVE = 'active'
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
