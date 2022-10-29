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
export interface IStateErrors {
  nameError: string;
  birthdayError: string;
  planetError: string;
  imgError: string;
}

export type InputRefTypes = React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>;

export interface IProps {
  addCard: (newCard: ICreatedCard) => void;
}
export type IState = {
  [key in keyof IStateErrors]: string;
};

export interface IValidation {
  isValid: boolean;
  validationErrors: IStateErrors;
}
export interface IFormData {
  name: string;
  birth: string;
  planet: string;
  species: boolean;
  img: FileList;
  news: boolean;
}

export type Name = 'name' | 'birth' | 'planet' | 'species' | 'img' | 'news';

export interface IPropsComponent {
  label: string;
  name: Name;
  textError: string | undefined;
  register: UseFormRegister<IFormData>;
  options?: string[];
}
