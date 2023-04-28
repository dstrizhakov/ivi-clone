import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Main/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: { args: { card: { img: string; name: string; id: number } } } = {
  args: {
    card: {
      id: 1,
      name: 'card name',
      img: 'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85',
    },
  },
};
