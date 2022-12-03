import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';

import HomePage from '../pages/homePage/HomePage';
import { IChar } from '../constants/constants';
import { Provider } from 'react-redux';
import { store } from '../store/Store';

jest.mock('axios');

type response = {
  data: IChar[];
};

describe('get data from response', () => {
  let response: response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1212,
          name: 'Rick',
          status: 'alive',
          gender: 'male',
          species: 'human',
          origin: {
            name: 'Earth',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        },
      ],
    };
  });
  test('Api call', async () => {
    (axios.get as jest.Mock).mockResolvedValue(response);
    render(
      <Provider store={store}>
        <HomePage />{' '}
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText(/Search.../i) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Rick' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
