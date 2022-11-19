import { UseFormRegister } from 'react-hook-form';

export interface ICreatedCard {
  id: number;
  name: string;
  birth: string;
  planet: string;
  species: string;
  img: string;
  news: boolean;
}

export type InputRefTypes = React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>;

export interface IProps {
  addCard: (newCard: ICreatedCard) => void;
}

export interface IFormData {
  name: string;
  birth: Date;
  planet: string;
  species: boolean;
  img: FileList;
  news: boolean;
}

export type Name = 'name' | 'birth' | 'planet' | 'species' | 'img' | 'news';

export type PropsComponent = {
  label: string;
  name: Name;
  textError: string | undefined;
  register: UseFormRegister<IFormData>;
  options?: string[];
};
