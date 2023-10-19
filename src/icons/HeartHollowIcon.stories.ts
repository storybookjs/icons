import type { Meta, StoryObj } from '@storybook/react';

import { HeartHollowIcon } from './HeartHollowIcon';

const meta: Meta<typeof HeartHollowIcon> = {
  component: HeartHollowIcon,
};

export default meta;
type Story = StoryObj<typeof HeartHollowIcon>;

export const Default: Story = { args: { size: 100 } };
