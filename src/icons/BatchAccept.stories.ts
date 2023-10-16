import type { Meta, StoryObj } from '@storybook/react';

import { BatchAccept } from './BatchAccept';

const meta: Meta<typeof BatchAccept> = {
  component: BatchAccept,
};

export default meta;
type Story = StoryObj<typeof BatchAccept>;

export const Default: Story = { args: { size: 100 } };
