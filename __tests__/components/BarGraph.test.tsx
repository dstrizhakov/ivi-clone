import BarGraph from '../../src/components/BarGraph/BarGraph';
import { cleanup, render, screen } from '@testing-library/react';

describe('BarGraphSnapshot', () => {
  test('25%', () => {
    const component = render(<BarGraph width={25} />);
    expect(component).toMatchSnapshot();
  });
  test('50%', () => {
    const component = render(<BarGraph width={50} />);
    expect(component).toMatchSnapshot();
  });
  test('75%', () => {
    const component = render(<BarGraph width={75} />);
    expect(component).toMatchSnapshot();
  });
  test('100%', () => {
    const component = render(<BarGraph width={100} />);
    expect(component).toMatchSnapshot();
  });
});

describe('BarGraph', () => {
  beforeEach(() => {
    render(<BarGraph width={25} />);
  });
  it('should be in the document', async () => {
    expect(screen.getByTestId('bar')).toBeInTheDocument();
  });

  afterEach(cleanup);
});
