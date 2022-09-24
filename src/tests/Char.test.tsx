import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Char from '../pages/homePage/Char';

const initialData = {
  id: 3,
  name: 'Rick',
  status: 'string',
  gender: 'string',
  species: 'string',
  origin: {
    name: 'string',
  },
  image: 'string',
};

describe('Char', () => {
  test('renders correct', () => {
    render(
      <BrowserRouter>
        <Char char={initialData} key={initialData.id} />
      </BrowserRouter>
    );
    const element = screen.getByText(/Rick/i);
    expect(element).toBeInTheDocument();
  });

  test('image to be in the document', () => {
    render(
      <BrowserRouter>
        <Char char={initialData} key={initialData.id} />
      </BrowserRouter>
    );
    expect(screen.getByAltText('char-image')).toBeInTheDocument();
  });
});
