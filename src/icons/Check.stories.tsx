import type { Meta, StoryObj } from '@storybook/react';

import { Check } from './Check';

const meta: Meta<typeof Check> = {
  component: Check,
};

export default meta;
type Story = StoryObj<typeof Check>;

export const Default: Story = { args: { size: 14 } };
