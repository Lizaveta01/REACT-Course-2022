import React, { Component } from 'react';

import { Input, Label, Switcher, SwitcherSlider, SwitcherTrack } from './ToggleSwitcher.styled';

class ToggleSwitch extends Component<IProps> {
  render() {
    const { label, inputRef } = this.props;

    return (
      <Label>
        {label}
        <Switcher>
          <Input type="checkbox" ref={inputRef}></Input>
          <SwitcherTrack>
            <SwitcherSlider />
          </SwitcherTrack>
        </Switcher>
      </Label>
    );
  }
}

export default ToggleSwitch;

export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
