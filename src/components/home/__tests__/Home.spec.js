// eslint-disable-next-line import/no-unresolved
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

afterEach(cleanup);

test('Check if headline "home" exists', () => {
  const { getByText } = render(<Home />);
  const home = getByText('Home');
  expect(home.textContent).toMatch('Home');
});
