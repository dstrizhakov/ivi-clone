import type { Meta, StoryObj } from '@storybook/react';
import Search from '@/components/Search/Search';

const meta: Meta<typeof Search> = {
  title: 'Main/Search',
  component: Search,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};
