import type { Meta, StoryObj } from '@storybook/react';

import { SubtractIcon } from './SubtractIcon';

const meta: Meta<typeof SubtractIcon> = {
  component: SubtractIcon,
};

export default meta;
type Story = StoryObj<typeof SubtractIcon>;

export const Default: Story = { args: { size: 100 } };
