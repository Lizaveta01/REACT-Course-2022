import React, { Component } from 'react';

import { ButtonSubmit } from './SubmitButton.styled';

class Submit extends Component<IProps> {
  componentDidMount() {
    const { btnRef } = this.props;
    (btnRef.current as HTMLButtonElement).disabled = true;
  }

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
