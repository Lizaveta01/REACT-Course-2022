import React from 'react';
import { IFormData, Name } from '../types';
import { UseFormRegister } from 'react-hook-form';

import { Input, Label, Switcher, SwitcherSlider, SwitcherTrack } from './ToggleSwitcher.styled';

const ToggleSwitch = ({ label, name, register }: IProps) => {
  return (
    <Label>
      {label}
      <Switcher>
        <Input type="checkbox" {...register(name)}></Input>
        <SwitcherTrack>
          <SwitcherSlider />
        </SwitcherTrack>
      </Switcher>
    </Label>
  );
};

export default ToggleSwitch;

export interface IProps {
  label: string;
  name: Name;
  register: UseFormRegister<IFormData>;
}
