import { render, screen } from '@testing-library/react';
import React from 'react';

import Search from '../components/search/Search';
import { mockLocalStorage } from './mockLocalStorage';

const search = 'bar';

const { getItemMock } = mockLocalStorage();
describe('getdata', () => {
  it('fetches something from localStorage', () => {
    getItemMock.mockReturnValue('bar');
    render(
      <Search
        search={search}
        setSearch={() => {
          return 1;
        }}
        handleKeyDown={() => {
          return 1;
        }}
      />,
    );
    expect(getItemMock).toHaveBeenCalled();
    const nameInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(nameInput.value).toBe('bar');
  });
});
