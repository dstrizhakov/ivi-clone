import type { Meta, StoryObj } from '@storybook/react';
import SearchButton from '@/components/Header/Search/SearchButton/SearchButton';

const meta: Meta<typeof SearchButton> = {
  title: 'Main/Search/SearchButton',
  component: SearchButton,
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Default: Story = {};
