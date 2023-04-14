import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button/Button';
import { ButtonProps } from '@/components/Button/Button.props';

interface iButton extends ButtonProps {
  title: string;
  component: ButtonProps;
  tags: [];
  argTypes?: ButtonProps;
}

const meta: Meta<iButton> = {
  title: 'Main/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<iButton>;

export const Red: Story = {
  args: {
    appearance: 'red',
    children: 'Button',
  },
};

export const Square: Story = {
  args: {
    appearance: 'square',
    children: 'Button',
  },
};

export const Circle: Story = {
  args: {
    appearance: 'circle',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'L',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'S',
    children: 'Button',
  },
};
