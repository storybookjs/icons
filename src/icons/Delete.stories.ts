import type { Meta, StoryObj } from '@storybook/react';

import { Delete } from './Delete';

const meta: Meta<typeof Delete> = {
  component: Delete,
};

export default meta;
type Story = StoryObj<typeof Delete>;

export const Default: Story = { args: { size: 100 } };
