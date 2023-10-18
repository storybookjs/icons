import type { Meta, StoryObj } from '@storybook/react';

import { BatchDenyIcon } from './BatchDenyIcon';

const meta: Meta<typeof BatchDenyIcon> = {
  component: BatchDenyIcon,
};

export default meta;
type Story = StoryObj<typeof BatchDenyIcon>;

export const Default: Story = { args: { size: 100 } };
