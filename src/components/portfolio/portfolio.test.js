import React from 'react';
import Portfolio from './Portfolio';
import { render } from '@testing-library/react';

test('should ', () => {
  const screen = render(<Portfolio />);

  expect(screen.getByText('Projects')).toBeInTheDocument();
});
