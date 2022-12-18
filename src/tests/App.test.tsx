import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../app/App';
import { Provider } from 'react-redux';
import { store } from '../store/Store';

describe('App', () => {
  it('render menu pages', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    expect(screen.queryByText(/About us/i)).toBeInTheDocument();
    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
  });
});
