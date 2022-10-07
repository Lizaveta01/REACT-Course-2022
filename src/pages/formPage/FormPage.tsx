import React from 'react';
import { Component } from 'react';
import { Form } from 'react-router-dom';
import { FormPageWrapper } from './FormPage.styled';

class FormPage extends Component {
  render() {
    return (
      <FormPageWrapper>
        <Form/>
        <CharList/>
      </FormPageWrapper>
    );
  }
}

export default FormPage;
