import React, { Component } from 'react';

import {
  FormWrapper,
  LabelDate,
  SelectWrapper,
  LabelName,
  CheckboxWrapper,
  Switcher,
} from './Form.styled';

class Form extends Component {
  input: React.RefObject<unknown>;
  fileInput: React.RefObject<unknown>;
  name: HTMLInputElement | null;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    //  const char = {
    //    name: this.name,
    //    date: this.date,
    //    country: this.country,
    //    skills: this.skills,
    //    gender: this.gender,
    //    file:this.fileInput,
    //  }
    //   localStorage.setItem(`${this.name}`, JSON.stringify(char));
    event.preventDefault();
  }

  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <LabelName>
          Name:
          <input type="text" value={'Liza'} name="name" ref={(input) => (this.name = input)} />
        </LabelName>
        <LabelDate>
          BirthDay:
          <input type="date" />
        </LabelDate>
        <SelectWrapper name="country" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </SelectWrapper>
        <CheckboxWrapper>
          Skills:
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
        </CheckboxWrapper>
        <Switcher></Switcher>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <input type="submit" value="Submit" />
      </FormWrapper>
    );
  }
}

export default Form;
