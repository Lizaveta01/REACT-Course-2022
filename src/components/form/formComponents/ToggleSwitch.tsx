import React, { ChangeEvent, Component } from 'react';
import { Input, Label, Switch } from './ToggleSwitch.styled';

class ToggleSwitch extends Component<IProps> {
  state = {
    checked: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ checked: e.target.checked });

  render() {
    const { checked } = this.state;
    const { label, inputRef } = this.props;
    return (
      <Label>
        <span>
          {label}
          <br />
          {checked ? 'yes' : 'no'}
        </span>
        <Input
          type="checkbox"
          ref={inputRef}
          onChange={this.handleChange}
          checked={checked}
        ></Input>
        <Switch></Switch>
      </Label>
    );
  }
}

export default ToggleSwitch;
export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
