import type { Meta, StoryObj } from '@storybook/react';

import { SearchModalProps } from '@/components/Header/Search/SearchModal/SearchModal.props';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';

const meta: Meta<SearchModalProps> = {
  title: 'Main/Search/SearchModal',
  component: SearchModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SearchModalProps>;

export const Opened: Story = {
  args: {
    isOpen: true,
  },
};
