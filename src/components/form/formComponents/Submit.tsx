import React, { Component } from 'react';
import { ButtonSubmit } from './FormComponents.styled';

class Submit extends Component<IProps> {
  render() {
    const { label, btnRef } = this.props;
    return (
      <ButtonSubmit ref={btnRef} type="submit">
        {label}
      </ButtonSubmit>
    );
  }
}

export default Submit;

export interface IProps {
  label: string;
  btnRef: React.RefObject<HTMLButtonElement>;
}
