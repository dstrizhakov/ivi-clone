import type { Meta, StoryObj } from '@storybook/react';
import { P } from '@/components/P/P';
import { PProps } from '@/components/P/P.props';

const meta: Meta<PProps> = {
  title: 'Main/P',
  component: P,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PProps>;

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
