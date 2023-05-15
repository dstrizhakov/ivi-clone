import type { Meta, StoryObj } from '@storybook/react';

import BackButton from '@/components/BackButton/BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Main/BackButton',
  component: BackButton,
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
};
