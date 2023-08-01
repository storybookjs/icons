import type { Meta, StoryObj } from '@storybook/react';

import { CircleHollow } from './CircleHollow';

const meta: Meta<typeof CircleHollow> = {
  component: CircleHollow,
};

export default meta;
type Story = StoryObj<typeof CircleHollow>;

export const Default: Story = { args: { size: 100 } };
