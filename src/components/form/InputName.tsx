import React, { Component } from 'react';
import { LabelName } from './FormComponents.styled';

class InputName extends Component {
  render() {
    return (
      <LabelName>
        Name:
        <input type="text" name="name" />
      </LabelName>
    );
  }
}

export default InputName;
