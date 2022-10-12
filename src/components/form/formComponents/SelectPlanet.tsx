import React, { Component } from 'react';
import { ErrorText, LabelPlanet } from './FormComponents.styled';

class SelectPlanet extends Component<IProps> {
  render() {
    const { label, selectRef, options, textError, name, handleChangeInput } = this.props;
    return (
      <>
        <LabelPlanet>
          {label}
          <select
            defaultValue=""
            ref={selectRef}
            onChange={() => handleChangeInput(`${name}Error`, textError)}
          >
            <option selected>Select planet</option>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </LabelPlanet>
        {textError !== '' && <ErrorText>{textError}</ErrorText>}
      </>
    );
  }
}

export default SelectPlanet;

export interface IProps {
  label: string;
  selectRef: React.RefObject<HTMLSelectElement>;
  options: string[];
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
