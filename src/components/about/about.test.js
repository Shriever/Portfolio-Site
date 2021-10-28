import React from 'react';
import About from './About';
import { render } from '@testing-library/react';
// describe('file', () => {
//   it('loads', () => {
//     expect(true).toBe(true);
//   });
// });
test('should ', () => {
  const screen = render(<About />);

  expect(screen.getByText('About Me')).toBeInTheDocument();
});
