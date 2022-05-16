import React from 'react';
import { render, screen } from '@testing-library/react';
import MyFirstProject from './MyFirstProject';

test('renders learn react link', () => {
  render(<MyFirstProject />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
