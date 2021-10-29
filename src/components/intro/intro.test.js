import React from 'react';
import Intro from './Intro';
import { render } from '@testing-library/react';

test('should ', () => {
  const screen = render(<Intro />);

  expect(screen.getByText('Levi Lieberman')).toBeInTheDocument();
});
