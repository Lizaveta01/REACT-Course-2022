import { render, screen } from '@testing-library/react';
import React from 'react';

import Search from '../components/search/Search';
import { mockLocalStorage } from './mockLocalStorage';

const search = 'bar';

const { getItemMock } = mockLocalStorage();

describe('getdata', () => {
  const handleKeyDown = jest.fn();
  const setSearch = jest.fn();
  it('fetches something from localStorage', () => {
    render(<Search search={search} setSearch={setSearch} handleKeyDown={handleKeyDown} />);
    const nameInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(nameInput.value).toBe('bar');
  });
});
