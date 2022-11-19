import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { planets } from '../../models/planets';
import { FormWrapper } from './Form.styled';

import CheckedNews from './checkbox/CheckedNews';
import InputDate from './inputDate/InputDate';
import InputFile from './inputFile/InputFile';
import InputName from './inputName/InputName';
import SelectPlanet from './select/SelectPlanet';
import ToggleSwitch from './switcher/ToggleSwitcher';

import { IFormData, IProps } from './types';
import { Word } from '../../constants/constants';
import { ButtonSubmit } from './submitButton/SubmitButton.styled';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = ({ addCard }: IProps) => {
  const schema = yup
    .object({
      name: yup.string().required().min(3),
      birth: yup.string().test('age', 'You must be 18 or older', function (birth) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);
        return new Date(birth!) <= cutoff;
      }),
      planet: yup.string().required(),
      img: yup.mixed().test('required', 'Please upload a Photo', (value) => {
        return value != null;
      }),
    })
    .required();

  const {
    register,
    formState: { errors, isValid, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ name, birth, planet, species, img, news }: IFormData) => {
    const imgFile = img[0];
    const downFile = URL.createObjectURL(imgFile!);
    const dateBirth = new Date(birth);
    const newCard = {
      id: new Date().getTime(),
      name,
      birth: dateBirth.toLocaleDateString(),
      planet,
      species: species ? Word.ALIEN : Word.HUMAN,
      img: downFile,
      news,
    };

    addCard(newCard);
    reset();
  };

  return (
    <FormWrapper data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <InputName label="Name:" textError={errors?.name?.message} name="name" register={register} />
      <InputDate
        label="BirthDay:"
        textError={errors?.birth?.message}
        name="birth"
        register={register}
      />
      <SelectPlanet
        label="Planet:"
        options={planets}
        textError={errors?.planet?.message}
        name="planet"
        register={register}
      />
      <ToggleSwitch label="Are you a human?" name="species" register={register} />
      <InputFile
        label="Upload file:"
        textError={errors?.img?.message}
        name="img"
        register={register}
      />
      <CheckedNews label="I want to receive news" register={register} name="news" />
      <ButtonSubmit type="submit" disabled={!isValid}>
        Submit
      </ButtonSubmit>
    </FormWrapper>
  );
};

export default Form;
