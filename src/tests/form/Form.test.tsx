import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FormPage from '../../pages/formPage/FormPage';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  test('Should form exist on page', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>,
    );
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });

  test('Should form have all nesseccary field', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>,
    );
    const inputName = screen.getByLabelText(/Name:/i);
    const inputDate = screen.getByLabelText(/BirthDay:/i);
    const selectPlanet = screen.getByLabelText(/Planet:/i);
    const switcher = screen.getByLabelText(/Are you a human?/i);
    const fileInput = screen.getByTestId('upload-photo');
    const inputCheckbox = screen.getByLabelText(/I want to receive news/i);
    const button = screen.getByText(/Submit/i);

    expect(inputName).toBeInTheDocument();
    expect(inputDate).toBeInTheDocument();
    expect(selectPlanet).toBeInTheDocument();
    expect(switcher).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(inputCheckbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Page have to add cards and clean form fields', () => {
    const file = new File(['card'], 'card.jpg', { type: 'image/jpg' });
    global.URL.createObjectURL = jest.fn();

    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>,
    );

    const inputName = screen.getByLabelText(/Name:/i) as HTMLInputElement;
    const inputDate = screen.getByLabelText(/BirthDay:/i) as HTMLInputElement;
    const selectPlanet = screen.getByLabelText(/Planet:/i) as HTMLSelectElement;
    const switcher = screen.getByLabelText(/Are you a human?/i) as HTMLInputElement;
    const fileInput = screen.getByTestId('upload-photo') as HTMLInputElement;
    const inputCheckbox = screen.getByLabelText(/I want to receive news/i) as HTMLInputElement;
    const button = screen.getByText(/Submit/i);

    fireEvent.change(inputName, { target: { value: 'Rudi' } });
    fireEvent.change(inputDate, { target: { value: '2000-01-22' } });
    fireEvent.change(selectPlanet, { target: { value: 'Earth' } });
    fireEvent.change(switcher, { target: { checked: true } });
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });
    fireEvent.change(inputCheckbox, { target: { checked: true } });

    expect(inputName.value).toBe('Rudi');
    expect(inputDate.value).toBe('2000-01-22');
    expect(selectPlanet.value).toBe('Earth');
    expect(switcher.checked).toBe(true);
    expect(inputCheckbox.checked).toBe(true);
    expect(fileInput.files).toHaveLength(1);

    userEvent.click(button);
    const windowMessage = screen.getByText(/Card was created successfully!/i);
    expect(windowMessage).toBeInTheDocument();

    expect(inputName.value).toBe('');
    expect(inputDate.value).toBe('');
    expect(selectPlanet.value).toBe('');
    expect(switcher.checked).toBe(false);
    expect(inputCheckbox.checked).toBe(false);
  });
});
