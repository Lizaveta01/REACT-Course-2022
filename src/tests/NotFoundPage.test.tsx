import { render, screen } from '@testing-library/react';
import React from 'react';

import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

describe('test NotFound page', () => {
  test('render component correctly', () => {
    render(<NotFoundPage />);
    expect(screen.getByText(/Sorry, this page not found/i)).toBeInTheDocument();
  });

  test('render match snapshot', () => {
    expect(render(<NotFoundPage />)).toMatchSnapshot();
  });
});
