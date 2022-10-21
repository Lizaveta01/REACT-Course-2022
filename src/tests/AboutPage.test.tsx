import { render, screen } from '@testing-library/react';
import React from 'react';

import AboutPage from '../pages/aboutPage/AboutPage';

describe('test About page', () => {
  test('render component correctly', () => {
    render(<AboutPage />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  test('render match snapshot', () => {
    expect(render(<AboutPage />)).toMatchSnapshot();
  });
});
