import React from 'react';

import { ErrorText } from '../Form.styled';
import { PropsComponent } from '../types';
import { LabelPlanet } from './SelectPlanet.styled';

const SelectPlanet = ({ label, options, textError, name, register }: PropsComponent) => {
  return (
    <>
      <LabelPlanet>
        {label}
        <select defaultValue="" {...register(name)}>
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
