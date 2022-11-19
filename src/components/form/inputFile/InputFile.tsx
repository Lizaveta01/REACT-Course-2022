import React from 'react';

import { ErrorText } from '../Form.styled';
import { PropsComponent } from '../types';
import { LabelUploadFile } from './InputFiles.styled';

const InputFile = ({ label, textError, name, register }: PropsComponent) => {
  return (
    <>
      <LabelUploadFile>
        {label}
        <input type="file" data-testid="upload-photo" {...register(name)} />
      </LabelUploadFile>
      {textError !== '' && <ErrorText>{textError}</ErrorText>}
    </>
  );
};

export default InputFile;
