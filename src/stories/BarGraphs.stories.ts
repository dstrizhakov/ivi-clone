import type { Meta, StoryObj } from '@storybook/react';
import BarGraph from '@/components/BarGraph/BarGraph';
import { BarGraphProps } from '@/components/BarGraph/BarGraph.props';

const meta: Meta<BarGraphProps> = {
  title: 'Main/BarGraph',
  component: BarGraph,
};

export default meta;
type Story = StoryObj<BarGraphProps>;

export const Percent25: Story = {
  args: {
    width: 25,
  },
};

export const Percent50: Story = {
  args: {
    width: 50,
  },
};

export const Percent75: Story = {
  args: {
    width: 75,
  },
};

export const Percent100: Story = {
  args: {
    width: 100,
  },
};
