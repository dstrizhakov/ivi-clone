import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselProps } from '@/components/Carousel/Carousel.props';

const meta: Meta<CarouselProps> = {
  title: 'Main/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  args: {
    children: 'text',
  },
};
