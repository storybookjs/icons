import type { Meta, StoryObj } from '@storybook/react';

import { Branch } from './Branch';

const meta: Meta<typeof Branch> = {
  component: Branch,
};

export default meta;
type Story = StoryObj<typeof Branch>;

export const Default: Story = { args: { size: 14 } };
