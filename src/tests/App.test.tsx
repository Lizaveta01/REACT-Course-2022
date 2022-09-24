import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/app/App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders char', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/About us/i)).toBeInTheDocument();
    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
  });

  it('renders char', async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/Male/i)).toBeNull();
    expect(await screen.findByText(/Male/i)).toBeInTheDocument();
  });
});
