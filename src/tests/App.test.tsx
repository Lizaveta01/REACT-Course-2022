import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/app/App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('render menu pages', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/About us/i)).toBeInTheDocument();
    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
  });
});
