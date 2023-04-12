import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Main/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    card: {
      id: 1,
      name: 'card name',
    },
  },
};
