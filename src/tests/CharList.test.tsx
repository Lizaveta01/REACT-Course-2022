import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import CharList from '../pages/homePage/CharList';

describe('CharList', () => {
  test('it displays a row for each char', async () => {
    render(<CharList />, { wrapper: BrowserRouter });
    const userList = await waitFor(() => screen.findAllByTestId('char-item'));
    expect(userList).toHaveLength(20);
  });
});
