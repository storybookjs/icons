import type { Meta, StoryObj } from '@storybook/react';

import { CircleHollowIcon } from './CircleHollowIcon';

const meta: Meta<typeof CircleHollowIcon> = {
  component: CircleHollowIcon,
};

export default meta;
type Story = StoryObj<typeof CircleHollowIcon>;

export const Default: Story = { args: { size: 100 } };
