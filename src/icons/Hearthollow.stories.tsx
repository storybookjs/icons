import type { Meta, StoryObj } from '@storybook/react';

import { Hearthollow } from './Hearthollow';

const meta: Meta<typeof Hearthollow> = {
  component: Hearthollow,
};

export default meta;
type Story = StoryObj<typeof Hearthollow>;

export const Default: Story = { args: { size: 100 } };
