import type { Meta, StoryObj } from '@storybook/react';
import User from '@/components/User/User';

const meta: Meta<typeof User> = {
  title: 'Main/User',
  component: User,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User>;

export const Default: Story = {};
