import type { Meta, StoryObj } from '@storybook/react';
import { HtagProps } from '@/components/Htag/Htag.props';
import { Htag } from '@/components/Htag/Htag';

const meta: Meta<HtagProps> = {
  title: 'Main/Htag',
  component: Htag,
};

export default meta;
type Story = StoryObj<HtagProps>;

export const H1: Story = {
  args: {
    tag: 'h1',
    children: 'text',
  },
};

export const H2: Story = {
  args: {
    tag: 'h2',
    children: 'text',
  },
};

export const H3: Story = {
  args: {
    tag: 'h3',
    children: 'text',
  },
};

export const H4: Story = {
  args: {
    tag: 'h4',
    children: 'text',
  },
};
