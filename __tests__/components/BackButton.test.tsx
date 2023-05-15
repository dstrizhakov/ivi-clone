import { render } from '@testing-library/react';
import React from 'react';
import BackButton from '../../src/components/BackButton/BackButton';

describe('BackButton', () => {
  it('should be as in snapshot', () => {
    const component = render(<BackButton />);
    expect(component).toMatchSnapshot();
  });
});
