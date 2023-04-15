import type { Meta, StoryObj } from '@storybook/react';
import SearchButton from '@/components/Header/Search/SearchButton/SearchButton';
import { SearchButtonProps } from '@/components/Header/Search/SearchButton/SearchButton.props';

const meta: Meta<SearchButtonProps> = {
  title: 'Main/Search/SearchButton',
  component: SearchButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SearchButtonProps>;

export const Default: Story = {};
