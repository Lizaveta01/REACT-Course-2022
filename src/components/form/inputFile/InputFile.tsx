import React from 'react';

import { validationPicture } from '../../../utils/validation';
import { ErrorText } from '../Form.styled';
import { PropsComponent } from '../types';
import { LabelUploadFile } from './InputFiles.styled';

const InputFile = ({ label, textError, name, register }: PropsComponent) => {
  return (
    <>
      <LabelUploadFile>
        {label}
        <input
          type="file"
          data-testid="upload-photo"
          {...register(name, {
            validate: (value) => validationPicture(value as FileList),
          })}
        />
      </LabelUploadFile>
      {textError !== '' && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default InputFile;
