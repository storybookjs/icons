import type { Meta, StoryObj } from '@storybook/react';

import { TimerIcon } from './TimerIcon';

const meta: Meta<typeof TimerIcon> = {
  component: TimerIcon,
};

export default meta;
type Story = StoryObj<typeof TimerIcon>;

export const Default: Story = { args: { size: 100 } };
