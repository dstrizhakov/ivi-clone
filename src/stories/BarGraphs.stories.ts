import type { Meta, StoryObj } from '@storybook/react';
import BarGraph from '@/components/BarGraph/BarGraph';
import { BarGraphProps } from '@/components/BarGraph/BarGraph.props';

const meta: Meta<BarGraphProps> = {
  title: 'Main/BarGraph',
  component: BarGraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BarGraphProps>;

export const Percent25: Story = {
  args: {
    baseWidth: '300px',
    width: 25,
  },
};

export const Percent50: Story = {
  args: {
    baseWidth: '300px',
    width: 50,
  },
};

export const Percent75: Story = {
  args: {
    baseWidth: '300px',
    width: 75,
  },
};

export const Percent100: Story = {
  args: {
    baseWidth: '300px',
    width: 100,
  },
};
