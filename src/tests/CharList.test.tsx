import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import CharList from '../pages/homePage/CharList';
import { Provider } from 'react-redux';
import { store } from '../reducer/Store';

const charList = [
  {
    id: 1,
    name: 'string',
    status: 'string',
    gender: 'string',
    species: 'string',
    origin: {
      name: 'string',
    },
    image: 'string',
  },
];

describe('CharList', () => {
  test('it displays a row for each char', async () => {
    render(
      <Provider store={store}>
        <CharList charList={charList} />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const userList = await waitFor(() => screen.findAllByTestId('char-item'));
    expect(userList).toHaveLength(1);
  });
});
