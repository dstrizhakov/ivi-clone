import type { Meta, StoryObj } from '@storybook/react';

import { SearchModalProps } from '@/components/Search/SearchModal/SearchModal.props';
import SearchModal from '@/components/Search/SearchModal/SearchModal';

const meta: Meta<SearchModalProps> = {
  title: 'Main/Search/SearchModal',
  component: SearchModal,
  tags: ['autodocs'],
  args: {
    isOpen: false,
  },
};

export default meta;
type Story = StoryObj<SearchModalProps>;

export const Opened: Story = {
  args: {
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
