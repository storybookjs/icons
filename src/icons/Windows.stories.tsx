import type { Meta, StoryObj } from '@storybook/react';

import { Windows } from './Windows';

const meta: Meta<typeof Windows> = {
  component: Windows,
};

export default meta;
type Story = StoryObj<typeof Windows>;

export const Default: Story = { args: { size: 14 } };
