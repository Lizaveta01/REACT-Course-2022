import React from 'react';

import { PropsComponent } from '../types';
import { ErrorText } from '../Form.styled';
import { LabelDate } from './InputDate.styled';
import { validationBirthday } from '../../../utils/validation';

const InputDate = ({ label, textError, name, register }: PropsComponent) => {
  return (
    <>
      <LabelDate>
        {label}
        <input
          type="date"
          {...register(name, {
            validate: (value) => validationBirthday(value as string),
          })}
        />
      </LabelDate>
      {textError !== '' && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default InputDate;
