import React, { Component } from 'react';
import { CheckboxWrapper } from './FormComponents.styled';

class CheckedSkills extends Component {
  render() {
    return (
      <CheckboxWrapper>
        Skills:
        <label>
          <input type="checkbox" name="JavaScript" value="JS" />
          JavaScript
        </label>
        <label>
          <input type="checkbox" name="JavaScript" value="JS" />
          Node.js
        </label>
        <label>
          <input type="checkbox" name="JavaScript" value="JS" />
          React
        </label>
        <label>
          <input type="checkbox" name="JavaScript" value="JS" />
          CSS
        </label>
        <label>
          <input type="checkbox" name="JavaScript" value="JS" />
          HTML
        </label>
      </CheckboxWrapper>
    );
  }
}

export default CheckedSkills;
