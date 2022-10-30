import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IFormData, Name } from '../types';
import { Input, Label, Switcher, SwitcherSlider, SwitcherTrack } from './ToggleSwitcher.styled';

type Props = {
  label: string;
  name: Name;
  register: UseFormRegister<IFormData>;
};

const ToggleSwitch = ({ label, name, register }: Props) => {
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
