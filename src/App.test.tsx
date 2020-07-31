import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

describe('App Component', () => {
  it('should render App with title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Context/);

    expect(linkElement).toBeInTheDocument();
  });
})