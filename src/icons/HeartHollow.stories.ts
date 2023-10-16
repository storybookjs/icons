import type { Meta, StoryObj } from '@storybook/react';

import { HeartHollow } from './HeartHollow';

const meta: Meta<typeof HeartHollow> = {
  component: HeartHollow,
};

export default meta;
type Story = StoryObj<typeof HeartHollow>;

export const Default: Story = { args: { size: 100 } };
