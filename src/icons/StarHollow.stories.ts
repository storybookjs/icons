import type { Meta, StoryObj } from '@storybook/react';

import { StarHollow } from './StarHollow';

const meta: Meta<typeof StarHollow> = {
  component: StarHollow,
};

export default meta;
type Story = StoryObj<typeof StarHollow>;

export const Default: Story = { args: { size: 100 } };
