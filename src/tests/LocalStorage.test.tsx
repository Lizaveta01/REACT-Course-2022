import { render, screen } from '@testing-library/react';
import React from 'react';

import Search from '../pages/components/search/Search';
import { mockLocalStorage } from './mockLocalStorage';

const { getItemMock } = mockLocalStorage();
describe('getdata', () => {
  it('fetches something from localStorage', () => {
    getItemMock.mockReturnValue('bar');
    render(<Search />);
    expect(getItemMock).toHaveBeenCalled();
    const nameInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(nameInput.value).toBe('bar');
  });
});
