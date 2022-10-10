import React, { ChangeEvent, Component } from 'react';
import { Input, Label, Switch } from './ToggleSwitch.styled';

class ToggleSwitch extends Component {
  state = {
    checked: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ checked: e.target.checked });

  render() {
    const { checked } = this.state;
    return (
      <Label>
        <span>
          Are you a human? <br />
          {checked ? 'yes' : 'no'}
        </span>
        <Input type="checkbox" onChange={this.handleChange} checked={checked}></Input>
        <Switch></Switch>
      </Label>
    );
  }
}

export default ToggleSwitch;
