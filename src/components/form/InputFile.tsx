import React, { Component } from 'react';
import { LabelUploadFile } from './FormComponents.styled';

class InputFile extends Component {
  render() {
    return (
      <LabelUploadFile>
        Upload file:
        <input type="file" />
      </LabelUploadFile>
    );
  }
}

export default InputFile;
