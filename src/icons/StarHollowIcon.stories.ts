import type { Meta, StoryObj } from '@storybook/react';

import { StarHollowIcon } from './StarHollowIcon';

const meta: Meta<typeof StarHollowIcon> = {
  component: StarHollowIcon,
};

export default meta;
type Story = StoryObj<typeof StarHollowIcon>;

export const Default: Story = { args: { size: 100 } };
