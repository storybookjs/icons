import type { Meta, StoryObj } from '@storybook/react';

import { Failed } from './Failed';

const meta: Meta<typeof Failed> = {
  component: Failed,
};

export default meta;
type Story = StoryObj<typeof Failed>;

export const Default: Story = { args: { size: 100 } };
