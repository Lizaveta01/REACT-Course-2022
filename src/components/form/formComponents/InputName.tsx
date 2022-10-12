import React, { Component } from 'react';
import { ErrorText, LabelName } from './FormComponents.styled';

class InputName extends Component<IProps> {
  render() {
    const { label, inputRef, textError, name, handleChangeInput } = this.props;
    return (
      <>
        <LabelName>
          {label}
          <input
            type="text"
            autoComplete="off"
            ref={inputRef}
            onChange={() => handleChangeInput(`${name}Error`, textError)}
          />
        </LabelName>
        {textError !== '' && <ErrorText>{textError}</ErrorText>}
      </>
    );
  }
}

export default InputName;

export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
