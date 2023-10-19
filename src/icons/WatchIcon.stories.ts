import type { Meta, StoryObj } from '@storybook/react';

import { WatchIcon } from './WatchIcon';

const meta: Meta<typeof WatchIcon> = {
  component: WatchIcon,
};

export default meta;
type Story = StoryObj<typeof WatchIcon>;

export const Default: Story = { args: { size: 100 } };
