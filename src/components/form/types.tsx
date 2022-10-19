export interface ICreatedCard {
  id: number;
  name: string;
  birth: string;
  planet: string;
  species: boolean;
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
