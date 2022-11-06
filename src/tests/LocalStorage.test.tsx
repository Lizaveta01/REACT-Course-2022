import { render, screen } from '@testing-library/react';
import React from 'react';

import Search from '../components/search/Search';

const search = 'bar';

describe('getdata', () => {
  const setSearch = jest.fn();
  it('fetches something from localStorage', () => {
    render(<Search search={search} setSearch={setSearch} />);
    const nameInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(nameInput.value).toBe('bar');
  });
});
