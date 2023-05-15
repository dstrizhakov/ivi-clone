import { Button } from '../../src/components/Button/Button';
import { render, screen } from '@testing-library/react';
import { BtnA } from '../../src/components/Button/Button.props';
import React from 'react';

describe('Button', () => {
  it('should be circle', () => {
    render(<Button appearance={BtnA.circle}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('circle');
    expect(button).toMatchSnapshot();
  });
  it('should be red', () => {
    render(<Button appearance={BtnA.red}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('red');
    expect(button).toMatchSnapshot();
  });
  it('should be square', () => {
    render(<Button appearance={BtnA.square}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('square');
    expect(button).toMatchSnapshot();
  });
  it('should be rectangle', () => {
    render(<Button appearance={BtnA.rectangle}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('rectangle');
    expect(button).toMatchSnapshot();
  });
  it('should be rectangle default', () => {
    render(<Button>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('rectangle');
    expect(button).toMatchSnapshot();
  });
});
