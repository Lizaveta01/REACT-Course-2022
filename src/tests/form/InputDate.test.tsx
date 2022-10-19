import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputDate from '../../components/form/inputDate/InputDate';

describe('InputDate', () => {
  test('Check handleChange of InputDate component with error', () => {
    const label = 'BirthDay:';
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    const textError = 'Your age should be from 18 to 100';
    const name = 'birthday';
    const handleChangeInput = jest.fn();

    render(
      <InputDate
        label={label}
        inputRef={inputRef}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const inputDate = screen.getByLabelText(/BirthDay:/i) as HTMLInputElement;
    expect(inputDate).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Your age should be from 18 to 100/i);
    expect(errorBlock).toBeInTheDocument();

    expect(errorBlock).toBeInTheDocument();

    userEvent.type(inputDate, '2022-05-03');
    expect(inputDate.value).toBe('2022-05-03');
    expect(handleChangeInput).toHaveBeenCalledTimes(1);
  });

  test('Check handleChange of InputDate component without error', () => {
    const label = 'BirthDay:';
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    const textError = '';
    const name = 'birthday';
    const handleChangeInput = jest.fn();

    render(
      <InputDate
        label={label}
        inputRef={inputRef}
        textError={textError}
        name={name}
        handleChangeInput={handleChangeInput}
      />,
    );

    const inputDate = screen.getByLabelText(/BirthDay:/i) as HTMLInputElement;
    expect(inputDate).toBeInTheDocument();

    const errorBlock = screen.queryByText(/Your age should be from 18 to 100/i);
    expect(errorBlock).not.toBeInTheDocument();

    userEvent.type(inputDate, '2022-05-03');
    expect(inputDate.value).toBe('2022-05-03');

  });
});
