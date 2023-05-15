import type { Meta, StoryObj } from '@storybook/react';
import { P } from '@/components/P/P';
import { PProps } from '@/components/P/P.props';

const meta: Meta<PProps> = {
  title: 'Main/P',
  component: P,
};

export default meta;
type Story = StoryObj<PProps>;

export const White: Story = {
  args: {
    color: 'white',
    children: 'text',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
    children: 'text',
  },
};

export const GrayLight: Story = {
  args: {
    color: 'gray-light',
    children: 'text',
  },
};

export const Small: Story = {
  args: {
    size: 'S',
    children: 'text',
  },
};

export const Medium: Story = {
  args: {
    size: 'M',
    children: 'text',
  },
};

export const Large: Story = {
  args: {
    size: 'L',
    children: 'text',
  },
};
