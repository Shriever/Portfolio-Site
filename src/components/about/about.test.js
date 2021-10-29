import React from 'react';
import About from './About';
import { render } from '@testing-library/react';

test('should render static components', () => {
  const screen = render(<About />);

  expect(screen.getByText('About Me')).toBeInTheDocument();
});
