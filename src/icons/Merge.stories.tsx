import type { Meta, StoryObj } from '@storybook/react';

import { Merge } from './Merge';

const meta: Meta<typeof Merge> = {
  component: Merge,
};

export default meta;
type Story = StoryObj<typeof Merge>;

export const Default: Story = { args: { size: 14 } };
