import React, { Component, useState } from 'react';

import { planets } from '../../models/planets';
import { isObjectNotFromEmptyStrings, validationForm } from '../../utils/validation';
import { FormWrapper } from './Form.styled';

import CheckedNews from './checkbox/CheckedNews';
import InputDate from './inputDate/InputDate';
import InputFile from './inputFile/InputFile';
import InputName from './inputName/InputName';
import SelectPlanet from './select/SelectPlanet';
import Submit from './submitButton/Submit';
import ToggleSwitch from './switcher/ToggleSwitcher';

import { InputRefTypes, IProps, IState } from './types';
import { Word } from '../../constants/constants';

const Form = ({ addCard }: IProps) => {
  const nameRef = React.createRef<HTMLInputElement>();
  const birthdayRef = React.createRef<HTMLInputElement>();
  const planetRef = React.createRef<HTMLSelectElement>();
  const newsRef = React.createRef<HTMLInputElement>();
  const speciesRef = React.createRef<HTMLInputElement>();
  const imgRef = React.createRef<HTMLInputElement>();
  const btnRef = React.createRef<HTMLButtonElement>();
  const formRef = React.createRef<HTMLFormElement>();

  const [nameError, setNameError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [planetError, setPlanetError] = useState('');
  const [imgError, setImgError] = useState('');

  const errorChange = (key: string, value = '') => {
    this.setState({ [key]: value } as IState, checkSubmitBtn);
  };

  const handleChangeInput = (inputNameError: string, textError: string) => {
    if (textError !== '') {
      errorChange(inputNameError);
    } else {
      checkSubmitBtn();
    }
  };

  const checkSubmitBtn = () => {
    const isHasErrors = isObjectNotFromEmptyStrings(this.state);
    let isEmpty = true;
    if (
      getInputValue(nameRef) !== '' ||
      getInputValue(birthdayRef) !== '' ||
      getInputValue(planetRef) !== '' ||
      imgRef.current!.files?.length !== 0
    ) {
      isEmpty = false;
    }

    if (isHasErrors || isEmpty) {
      (btnRef.current as HTMLButtonElement).disabled = true;
    } else {
      (btnRef.current as HTMLButtonElement).disabled = false;
    }
  };

  const getInputValue = (inputRef: InputRefTypes): string => {
    return inputRef.current?.value as string;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = getInputValue(nameRef);
    const birthdayValue = getInputValue(birthdayRef);
    const planetValue = getInputValue(planetRef);
    const imgValue = imgRef.current?.files as FileList;

    const { isValid, validationErrors } = validationForm(
      nameValue,
      birthdayValue,
      planetValue,
      imgValue,
    );

    if (isValid) {
      const imgFile = imgValue[0];
      const downFile = URL.createObjectURL(imgFile!);
      const dateBirth = new Date(birthdayValue);
      const newCard = {
        id: new Date().getTime(),
        name: nameValue,
        birth: dateBirth.toLocaleDateString(),
        planet: planetValue,
        species: speciesRef.current?.checked ? Word.ALIEN : Word.HUMAN,
        img: downFile,
        news: newsRef.current?.checked as boolean,
      };
      addCard(newCard);
      formRef.current?.reset();
    } else {
      setState(validationErrors);
    }

    btnRef.current!.disabled = true;
    nameRef.current!.focus();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} ref={formRef} data-testid="form">
      <InputName
        label="Name:"
        inputRef={nameRef}
        textError={nameError}
        name="name"
        handleChangeInput={handleChangeInput}
      />
      <InputDate
        label="BirthDay:"
        inputRef={birthdayRef}
        textError={birthdayError}
        name="birthday"
        handleChangeInput={handleChangeInput}
      />
      <SelectPlanet
        label="Planet:"
        selectRef={planetRef}
        options={planets}
        textError={planetError}
        name="planet"
        handleChangeInput={handleChangeInput}
      />
      <ToggleSwitch label="Are you a human?" inputRef={speciesRef} />
      <InputFile
        label="Upload file:"
        imgRef={imgRef}
        textError={imgError}
        name="img"
        handleChangeInput={handleChangeInput}
      />
      <CheckedNews label="I want to receive news" inputRef={newsRef} />
      <Submit label="Submit" btnRef={btnRef} />
    </FormWrapper>
  );
};
export default Form;
