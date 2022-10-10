import React, { Component } from 'react';
import { LabelDate } from './FormComponents.styled';

class InputDate extends Component {
  render() {
    return (
      <LabelDate>
        Day of Birth:
        <input type="date" />
      </LabelDate>
    );
  }
}

export default InputDate;
