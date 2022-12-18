import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ModalWindow from '../components/modalWindow/ModalWindow';

describe('tests for ModalWindow', () => {
  test('test render ModalWindow', () => {
    const closeWindow = jest.fn();
    const card = {
      id: 1,
      name: 'rick',
      status: 'dead',
      gender: 'male',
      species: 'man',
      origin: {
        name: 'earth',
      },
      image: 'string',
    };

    render(<ModalWindow closeWindow={closeWindow} card={card} />);

    const modalWindow = screen.getByTestId('modal-window');
    expect(modalWindow).toBeInTheDocument();

    const img = screen.getByTestId('modal-image');
    expect(img).toBeInTheDocument();

    const name = screen.getByText(/rick/i);
    expect(name).toBeInTheDocument();

    const status = screen.getByText(/dead/i);
    expect(status).toBeInTheDocument();

    const gender = screen.getByText(/male/i);
    expect(gender).toBeInTheDocument();

    const species = screen.getByText(/man/i);
    expect(species).toBeInTheDocument();

    const planet = screen.getByText(/earth/i);
    expect(planet).toBeInTheDocument();
  });

  test('test render ModalWindow', () => {
    const closeWindow = jest.fn();
    const card = {
      id: 1,
      name: 'rick',
      status: 'dead',
      gender: 'male',
      species: 'man',
      origin: {
        name: 'earth',
      },
      image: 'string',
    };

    render(<ModalWindow closeWindow={closeWindow} card={card} />);

    const modalWindow = screen.getByTestId('modal-window');
    expect(modalWindow).toBeInTheDocument();

    const button = screen.getByTestId('button-modal-window');
    expect(button).toBeInTheDocument();
  });
});
