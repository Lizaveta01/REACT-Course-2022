import React, { Component } from 'react';
import { planets } from '../../models/planets';
import { isObjectNotFromEmptyStrings, validationForm } from '../../utils/validation';
import CheckedNews from './formComponents/CheckedNews';
import { FormWrapper } from './formComponents/FormComponents.styled';
import InputDate from './formComponents/InputDate';
import InputFile from './formComponents/InputFile';
import InputName from './formComponents/InputName';
import SelectPlanet from './formComponents/SelectPlanet';
import Submit from './formComponents/Submit';
import ToggleSwitch from './formComponents/ToggleSwitch';
import { InputRefTypes, IProps, IStateErrors, State } from './types';

class Form extends Component<IProps, IState> {
  nameRef = React.createRef<HTMLInputElement>();
  birthdayRef = React.createRef<HTMLInputElement>();
  planetRef = React.createRef<HTMLSelectElement>();
  newsRef = React.createRef<HTMLInputElement>();
  speciesRef = React.createRef<HTMLInputElement>();
  imgRef = React.createRef<HTMLInputElement>();
  btnRef = React.createRef<HTMLButtonElement>();
  formRef = React.createRef<HTMLFormElement>();

  state = {
    nameError: '',
    birthdayError: '',
    planetError: '',
    imgError: '',
  };

  errorChange = (key: string, value = '') => {
    this.setState({ [key]: value } as State, this.checkSubmitBtn);
  };

  handleChangeInput = (inputNameError: string, textError: string) => {
    if (textError !== '') {
      this.errorChange(inputNameError);
    } else {
      this.checkSubmitBtn();
    }
  };

  checkSubmitBtn = () => {
    const isHasErrors = isObjectNotFromEmptyStrings(this.state);
    let isEmpty = true;
    if (
      this.getInputValue(this.nameRef) !== '' ||
      this.getInputValue(this.birthdayRef) !== '' ||
      this.getInputValue(this.planetRef) !== '' ||
      this.imgRef.current!.files?.length !== 0
    ) {
      isEmpty = false;
    }

    if (isHasErrors || isEmpty) {
      (this.btnRef.current as HTMLButtonElement).disabled = true;
    } else {
      (this.btnRef.current as HTMLButtonElement).disabled = false;
    }
  };

  getInputValue = (inputRef: InputRefTypes): string => {
    return inputRef.current?.value as string;
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.nameRef.current?.value);
    const nameValue = this.getInputValue(this.nameRef);
    const birthdayValue = this.getInputValue(this.birthdayRef);
    const planetValue = this.getInputValue(this.planetRef);
    const imgValue = this.imgRef.current?.files as FileList;

    const { isValid, validationErrors } = validationForm(
      nameValue,
      birthdayValue,
      planetValue,
      imgValue,
    );
    if (isValid) {
      const dateBirth = new Date(birthdayValue);
      const imgFile = imgValue[0];
      const file = URL.createObjectURL(imgFile!);

      const newCard = {
        id: new Date().getTime(),
        name: nameValue,
        birth: dateBirth.toLocaleDateString(),
        planet: planetValue,
        species: this.speciesRef.current?.checked ? 'human' : 'alien',
        img: file,
        news: this.newsRef.current?.checked as boolean,
      };

      this.props.addCard(newCard);

      this.formRef.current?.reset();
    } else {
      this.setState(validationErrors);
    }
    // this.btnRef.current!.disabled = true;
    this.nameRef.current!.focus();
  };

  render() {
    const { nameError, birthdayError, palentError, imgError } = this.state;

    return (
      <FormWrapper onSubmit={this.handleSubmit} ref={this.formRef}>
        <InputName
          label="Name:"
          inputRef={this.nameRef}
          textError={nameError}
          name="name"
          handleChangeInput={this.handleChangeInput}
        />
        <InputDate
          label="BirthDay:"
          inputRef={this.birthdayRef}
          textError={birthdayError}
          name="birthday"
          handleChangeInput={this.handleChangeInput}
        />
        <SelectPlanet
          label="Planet:"
          selectRef={this.planetRef}
          options={planets}
          textError={palentError}
          name="palent"
          handleChangeInput={this.handleChangeInput}
        />
        <ToggleSwitch label="Are you a human?" inputRef={this.speciesRef} />
        <InputFile
          label="Upload file:"
          imgRef={this.imgRef}
          textError={imgError}
          name="name"
          handleChangeInput={this.handleChangeInput}
        />
        <CheckedNews label="I want to receive news" inputRef={this.newsRef} />
        <Submit label="Submit" btnRef={this.btnRef} />
      </FormWrapper>
    );
  }
}
export default Form;
