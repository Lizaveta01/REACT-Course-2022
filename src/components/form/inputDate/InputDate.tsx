import React, { Component } from 'react';

import { ErrorText } from '../Form.styled';
import { LabelDate } from './InputDate.styled';

class InputDate extends Component<IProps> {
  render() {
    const { label, inputRef, textError, name, handleChangeInput } = this.props;

    return (
      <>
        <LabelDate>
          {label}
          <input
            type="date"
            ref={inputRef}
            onChange={() => handleChangeInput(`${name}Error`, textError)}
          />
        </LabelDate>
        {textError !== '' && <ErrorText>{textError}</ErrorText>}
      </>
    );
  }
}

export default InputDate;

export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
