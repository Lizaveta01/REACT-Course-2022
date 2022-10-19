import React from 'react';
import { render, screen } from '@testing-library/react';

import CreatedCard from '../../components/createdCard/CreatedCard';

const initialData = {
  id: 1,
  name: 'Ricki',
  birth: '2000-02-12',
  planet: 'Earth',
  species: true,
  img: 'string',
  news: true,
};

describe('Cards exist in FormPage', () => {
  test('renders correct', () => {
    render(<CreatedCard card={initialData} key={initialData.id} />);
    const element = screen.getByText(/Ricki/i);
    expect(element).toBeInTheDocument();
  });
});
