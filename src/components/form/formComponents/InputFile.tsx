import React, { Component } from 'react';
import { ErrorText, LabelUploadFile } from './FormComponents.styled';

class InputFile extends Component<IProps> {
  render() {
    const { label, imgRef, textError, name, handleChangeInput } = this.props;
    return (
      <>
        <LabelUploadFile>
          {label}
          <input
            type="file"
            ref={imgRef}
            data-tstid="uploadphoto"
            onChange={() => handleChangeInput(`${name}Error`, textError)}
          />
        </LabelUploadFile>
        {textError !== '' && <ErrorText>{textError}</ErrorText>}
      </>
    );
  }
}

export default InputFile;

export interface IProps {
  label: string;
  imgRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
