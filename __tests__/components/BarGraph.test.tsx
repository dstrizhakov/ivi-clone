import BarGraph from '../../src/components/BarGraph/BarGraph';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

describe('BarGraphSnapshot', () => {
  test('25%', () => {
    const bar = render(<BarGraph width={25} />);
    expect(bar).toMatchSnapshot();
  });
  test('50%', () => {
    const bar = render(<BarGraph width={50} />);
    expect(bar).toMatchSnapshot();
  });
  test('75%', () => {
    const bar = render(<BarGraph width={75} />);
    expect(bar).toMatchSnapshot();
  });
  test('100%', () => {
    const bar = render(<BarGraph width={100} />);
    expect(bar).toMatchSnapshot();
  });
});

describe('BarGraph', () => {
  it('should be in the document', async () => {
    render(<BarGraph width={100} />);
    expect(screen.getByTestId('bar')).toBeInTheDocument();
  });

  afterEach(cleanup);
});
