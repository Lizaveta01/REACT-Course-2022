import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../components/search/Search';

describe('Search', () => {
  test('render match snapshot', () => {
    const handleKeyDown = jest.fn();
    const setSearch = jest.fn();
    const search = 'bar';
    const element = render(
      <Search search={search} setSearch={setSearch} handleKeyDown={handleKeyDown} />,
    );
    expect(element).toMatchSnapshot();
  });

  test('have placeholder', () => {
    const handleKeyDown = jest.fn();
    const setSearch = jest.fn();
    const search = 'bar';
    render(<Search search={search} setSearch={setSearch} handleKeyDown={handleKeyDown} />);
    const searchInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchInput).toBeInTheDocument();
  });

  test('functions are called', () => {
    const handleKeyDown = jest.fn();
    const setSearch = jest.fn();
    const search = 'bar';
    render(<Search search={search} setSearch={setSearch} handleKeyDown={handleKeyDown} />);
    const searchInput = screen.getByPlaceholderText(/Search.../i) as HTMLInputElement;
    userEvent.type(searchInput, 'Rick');
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(handleKeyDown).toHaveBeenCalled();
  });
});
