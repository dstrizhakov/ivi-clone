import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import { Meta } from '@storybook/react';

const meta: Meta<typeof PromoCarousel> = {
  title: 'Main/Carousel',
  component: PromoCarousel,
};

export default meta;

export const PromoCarouselStory = {
  component: PromoCarousel,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
