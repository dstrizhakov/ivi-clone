import type { Meta, StoryObj } from '@storybook/react';
import Description from '@/components/Description/Description';
import { iDesc } from '@/components/Description/Description.props';

const meta: Meta<iDesc> = {
  title: 'Main/Description',
  component: Description,
};

export default meta;
type Story = StoryObj<iDesc>;

export const Default: Story = {
  args: {
    title: 'Lorem ipsum',
    cut: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tortor quam. Proin pulvinar porta enim non mattis. Etiam tempus, arcu ac fringilla venenatis, orci augue tristique augue, bibendum pulvinar augue velit sit amet risus. Maecenas suscipit, magna vitae rhoncus lacinia, risus nibh luctus diam, et sodales mauris lectus nec dui. Nam sed porttitor quam. Quisque vitae maximus risus, vel convallis nunc. Nunc eu metus vitae orci cursus accumsan ac a nulla. Donec tincidunt egestas erat, a lacinia lorem. Nulla aliquam cursus mauris, eu tristique nisl sodales fringilla. Nulla est nulla, congue at eleifend eget, egestas non ante. Vestibulum orci purus, gravida rutrum mi eu, vulputate ornare elit. Pellentesque viverra metus eros, in viverra sem faucibus vitae. Fusce magna nulla, rutrum nec urna vitae, tristique facilisis metus. Maecenas lobortis nulla ac diam lacinia suscipit. Aliquam erat volutpat. Suspendisse orci leo, fermentum sed risus sit amet, sollicitudin interdum dui.',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tortor quam. Proin pulvinar porta enim non mattis. Etiam tempus, arcu ac fringilla venenatis, orci augue tristique augue, bibendum pulvinar augue velit sit amet risus. Maecenas suscipit, magna vitae rhoncus lacinia, risus nibh luctus diam, et sodales mauris lectus nec dui. Nam sed porttitor quam. Quisque vitae maximus risus, vel convallis nunc. Nunc eu metus vitae orci cursus accumsan ac a nulla. Donec tincidunt egestas erat, a lacinia lorem. Nulla aliquam cursus mauris, eu tristique nisl sodales fringilla. Nulla est nulla, congue at eleifend eget, egestas non ante. Vestibulum orci purus, gravida rutrum mi eu, vulputate ornare elit. Pellentesque viverra metus eros, in viverra sem faucibus vitae. Fusce magna nulla, rutrum nec urna vitae, tristique facilisis metus. Maecenas lobortis nulla ac diam lacinia suscipit. Aliquam erat volutpat. Suspendisse orci leo, fermentum sed risus sit amet, sollicitudin interdum dui.',
  },
};
