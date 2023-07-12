import type { Meta, StoryObj } from '@storybook/react';

import { Memory } from './Memory';

const meta: Meta<typeof Memory> = {
  component: Memory,
};

export default meta;
type Story = StoryObj<typeof Memory>;

export const Default: Story = { args: { size: 14 } };
