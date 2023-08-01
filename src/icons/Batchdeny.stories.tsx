import type { Meta, StoryObj } from '@storybook/react';

import { BatchDeny } from './BatchDeny';

const meta: Meta<typeof BatchDeny> = {
  component: BatchDeny,
};

export default meta;
type Story = StoryObj<typeof BatchDeny>;

export const Default: Story = { args: { size: 100 } };
