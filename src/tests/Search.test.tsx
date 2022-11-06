import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../components/search/Search';

describe('Search', () => {
  test('render match snapshot', () => {
    const setSearch = jest.fn();
    const search = 'bar';
    const element = render(<Search search={search} setSearch={setSearch} />);
    expect(element).toMatchSnapshot();
  });

  test('have placeholder', () => {
    const setSearch = jest.fn();
    const search = 'bar';
    render(<Search search={search} setSearch={setSearch} />);
    const searchInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchInput).toBeInTheDocument();
  });
});
