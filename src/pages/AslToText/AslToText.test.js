import React from 'react';
import { render } from '@testing-library/react';
import AslToText from './AslToText';

test('renders learn react link', () => {
  const { getByText } = render(<AslToText />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
