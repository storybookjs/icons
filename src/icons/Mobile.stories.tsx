import type { Meta, StoryObj } from '@storybook/react';

import { Mobile } from './Mobile';

const meta: Meta<typeof Mobile> = {
  component: Mobile,
};

export default meta;
type Story = StoryObj<typeof Mobile>;

export const Default: Story = { args: { size: 14 } };
