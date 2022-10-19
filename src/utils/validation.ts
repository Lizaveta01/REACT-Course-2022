import { IStateErrors, IValidation } from '../components/form/types';

function validationName(value: string) {
  const regexp = /^[a-z]{3,15}$/i;
  return regexp.test(value) ? '' : 'Field must consist of 3 - 15 English letters';
}

function validationBirthday(value: string) {
  if (value === '') {
    return 'Please choose a date';
  }

  const date = new Date(value).getTime();
  const dateNow = new Date();
  const copyDateNow = new Date();
  const date100Years = new Date(dateNow.setFullYear(dateNow.getFullYear() - 100)).getTime();
  const date18Years = new Date(copyDateNow.setFullYear(copyDateNow.getFullYear() - 18)).getTime();

  return date >= date100Years && date <= date18Years ? '' : 'Your age should be from 18 to 100';
}

function validationPlanet(value: string) {
  return value === '' ? 'Please choose a planet' : '';
}

function validationPicture(files: FileList) {
  if (files.length === 0) {
    return 'Please upload a picture';
  }

  const { type, size } = files[0];

  if (type !== 'image/png' && type !== 'image/jpg' && type !== 'image/jpeg') {
    return 'Picture should have .png, .jpg or .jpeg extensions';
  }

  if (size > 10485760) {
    return 'Max file size = 10 MB';
  }

  return '';
}

export function isObjectNotFromEmptyStrings(obj: IStateErrors): boolean {
  let key: string;
  let isHasNotEmptyStrings = false;
  for (key of Object.keys(obj)) {
    if (obj[key as keyof typeof obj] !== '') {
      isHasNotEmptyStrings = true;
    }
  }

  return isHasNotEmptyStrings;
}

export function validationForm(
  nameValue: string,
  birthdayValue: string,
  planetValue: string,
  imgValue: FileList,
): IValidation {
  const validationErrors = {
    nameError: validationName(nameValue),
    birthdayError: validationBirthday(birthdayValue),
    planetError: validationPlanet(planetValue),
    imgError: validationPicture(imgValue),
  };

  return { isValid: !isObjectNotFromEmptyStrings(validationErrors), validationErrors };
}
