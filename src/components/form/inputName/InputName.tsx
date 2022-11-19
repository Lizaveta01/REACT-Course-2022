import React from 'react';

import { ErrorText } from '../Form.styled';
import { PropsComponent } from '../types';
import { LabelName } from './InputName.styled';

const InputName = ({ label, name, textError, register }: PropsComponent) => {
  return (
    <>
      <LabelName>
        {label}
        <input {...register(name)} type="text" autoComplete="off" />
      </LabelName>
      {textError && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default InputName;
