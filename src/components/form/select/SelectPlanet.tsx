import React from 'react';
import { validationPlanet } from '../../../utils/validation';

import { ErrorText } from '../Form.styled';
import { IPropsComponent } from '../types';
import { LabelPlanet } from './SelectPlanet.styled';

const SelectPlanet = ({ label, options, textError, name, register }: IPropsComponent) => {
  return (
    <>
      <LabelPlanet>
        {label}
        <select
          defaultValue=""
          {...register(name, {
            validate: (value) => validationPlanet(value as string),
          })}
        >
          <option key={-1} disabled></option>
          {options!.map((option: string, index: number) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </LabelPlanet>
      {textError !== '' && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default SelectPlanet;
