import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../app/App';

describe('App', () => {
  it('render menu pages', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/About us/i)).toBeInTheDocument();
    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
  });
});
