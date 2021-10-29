import React from 'react';
import Intro from './Intro';
import { render } from '@testing-library/react';

test('should render static components', () => {
  const screen = render(<Intro />);

  expect(screen.getByText('Levi Lieberman')).toBeInTheDocument();
});
