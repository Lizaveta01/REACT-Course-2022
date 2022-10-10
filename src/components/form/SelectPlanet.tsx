import React, { Component } from 'react';
import { LabelPlanet, SelectWrapper } from './FormComponents.styled';

class SelectPlanet extends Component {
  render() {
    return (
      <LabelPlanet>
        Planet:
        <SelectWrapper name="Planet" id="" required>
          <option value="select-planet" selected>
            Select planet
          </option>
          <option value="earth">Earth</option>
          <option value="mars">Mars</option>
          <option value="venus">Venus</option>
          <option value="saturn">Saturn</option>
        </SelectWrapper>
      </LabelPlanet>
    );
  }
}

export default SelectPlanet;
