import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectPlanet from '../../components/form/select/SelectPlanet';

describe('Select element', () => {
  test('Check handleChange of Select component with error', () => {
    const label = 'Planet:';
    const options = ['Earth', 'Mars', 'Mercury', 'Venus'];
    const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
    const textError = 'Please choose a planet';
    const name = 'planet';
    const handleChangeInput = jest.fn();

    render(
      <SelectPlanet
        label={label}
        selectRef={selectRef}
        options={options}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const select = screen.getByLabelText(/Planet:/i) as HTMLSelectElement;
    expect(select).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Please choose a planet/i);
    expect(errorBlock).toBeInTheDocument();

    userEvent.selectOptions(select, 'Earth');
    expect(select.value).toBe('Earth');
    expect(handleChangeInput).toHaveBeenCalledTimes(1);
  });

  test('Check handleChange of Select component without error', () => {
    const label = 'Planet:';
    const options = ['Earth', 'Mars', 'Mercury', 'Venus'];
    const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
    const textError = '';
    const name = 'planet';
    const handleChangeInput = jest.fn();

    render(
      <SelectPlanet
        label={label}
        selectRef={selectRef}
        options={options}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const select = screen.getByLabelText(/Planet:/i) as HTMLSelectElement;
    expect(select).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Please choose a planet/i);
    expect(errorBlock).not.toBeInTheDocument();

    userEvent.selectOptions(select, 'Earth');
    expect(select.value).toBe('Earth');
    expect(handleChangeInput).toHaveBeenCalledTimes(1);
  });
});
