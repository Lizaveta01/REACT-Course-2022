import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputName from '../../components/form/inputName/InputName';

describe('InputName', () => {
  test('Check handleChange of InputName component with error', () => {
    const label = 'Name:';
    const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
    const textError = 'Field must consist of 3 - 15 English letters';
    const name = 'name';
    const handleChangeInput = jest.fn();

    render(
      <InputName
        label={label}
        inputRef={nameRef}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const textInput = screen.getByLabelText(/Name:/i) as HTMLInputElement;

    expect(textInput).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Field must consist of 3 - 15 English letters/i);

    expect(errorBlock).toBeInTheDocument();

    userEvent.type(textInput, 'Ricki');
    expect(textInput.value).toBe('Ricki');
    expect(handleChangeInput).toHaveBeenCalledTimes(5);
  });

  test('Check handleChange of DateField component without error', () => {
    const label = 'Name:';
    const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
    const textError = '';
    const name = 'name';
    const handleChangeInput = jest.fn();

    render(
      <InputName
        label={label}
        inputRef={nameRef}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const textInput = screen.getByLabelText(/Name:/i) as HTMLInputElement;

    expect(textInput).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Field must consist of 3 - 15 English letters/i);

    expect(errorBlock).not.toBeInTheDocument();

    userEvent.type(textInput, 'Ricki');
    expect(textInput.value).toBe('Ricki');
    expect(handleChangeInput).toHaveBeenCalledTimes(5);
  });
});
