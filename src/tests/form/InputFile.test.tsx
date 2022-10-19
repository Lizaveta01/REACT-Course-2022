import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputFile from '../../components/form/inputFile/InputFile';

test('Check handleChange of DateField component with error', () => {
  const imgRef: React.RefObject<HTMLInputElement> = React.createRef();
  const imgError = 'Please upload a picture';
  const label = 'Upload file:';
  const name = 'img';
  const handleChangeInput = jest.fn();

  render(
    <InputFile
      label={label}
      imgRef={imgRef}
      textError={imgError}
      name={name}
      handleChangeInput={handleChangeInput}
    />,
  );

  const imgInput = screen.getByTestId('upload-photo') as HTMLInputElement;
  expect(imgInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please upload a picture/i);
  expect(errorBlock).toBeInTheDocument();
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
});

test('Check handleChange of DateField component without error', () => {
  const imgRef: React.RefObject<HTMLInputElement> = React.createRef();
  const imgError = '';
  const label = 'Upload file:';
  const name = 'img';
  const handleChangeInput = jest.fn();

  render(
    <InputFile
      label={label}
      imgRef={imgRef}
      textError={imgError}
      name={name}
      handleChangeInput={handleChangeInput}
    />,
  );

  const imgInput = screen.getByTestId('upload-photo') as HTMLInputElement;
  expect(imgInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please upload a picture/i);

  expect(errorBlock).not.toBeInTheDocument();

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.upload(imgInput, file);
  expect(imgInput?.files![0]).toStrictEqual(file);
  expect(imgInput.files).toHaveLength(1);
  expect(handleChangeInput).toHaveBeenCalledTimes(1);
});
