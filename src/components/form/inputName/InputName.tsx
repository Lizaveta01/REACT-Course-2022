import React from 'react';

import { validationName } from '../../../utils/validation';
import { ErrorText } from '../Form.styled';
import { PropsComponent } from '../types';
import { LabelName } from './InputName.styled';

const InputName = ({ label, name, textError, register }: PropsComponent) => {
  return (
    <>
      <LabelName>
        {label}
        <input
          {...register(name, {
            validate: (value) => validationName(value as string),
          })}
          type="text"
          autoComplete="off"
        />
      </LabelName>
      {textError && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default InputName;
