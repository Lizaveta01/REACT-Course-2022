import React from 'react';
import { Component } from 'react';
import CreatedCard from '../../components/createdCard/CreatedCard';
import CheckedSkills from '../../components/form/CheckedSkills';
import { ButtonSubmit } from '../../components/form/FormComponents.styled';
import InputDate from '../../components/form/InputDate';
import InputFile from '../../components/form/InputFile';
import InputName from '../../components/form/InputName';
import SelectPlanet from '../../components/form/SelectPlanet';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import { CardList, FormPageWrapper, FormWrapper } from './FormPage.styled';

class FormPage extends Component {
  // input: React.RefObject<unknown>;
  // fileInput: React.RefObject<HTMLInputElement>;
  // name: HTMLInputElement;
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.input = React.createRef();
  //   this.fileInput = React.createRef();
  // }

  handleSubmit(event: { preventDefault: () => void }) {
    //  const char = {
    //    name: this.name,
    //    date: this.date,
    //    country: this.country,
    //    skills: this.skills,
    //    gender: this.gender,
    //    file:this.fileInput,
    //  }
    //   localStorage.setItem(`${this.name}`, JSON.stringify(char));
    // ref={(input) => (this.name = input)}
    // ref={this.fileInput}
    event.preventDefault();
  }

  render() {
    return (
      <FormPageWrapper>
        <FormWrapper onSubmit={this.handleSubmit}>
          <InputName />
          <InputDate />
          <SelectPlanet />
          <CheckedSkills />
          <ToggleSwitch />
          <InputFile />
          <ButtonSubmit type="submit" disabled>
            Submit
          </ButtonSubmit>
        </FormWrapper>

        <CardList>
          <CreatedCard />
        </CardList>
      </FormPageWrapper>
    );
  }
}

export default FormPage;
