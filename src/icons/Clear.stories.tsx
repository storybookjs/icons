import type { Meta, StoryObj } from '@storybook/react';

import { Clear } from './Clear';

const meta: Meta<typeof Clear> = {
  component: Clear,
};

export default meta;
type Story = StoryObj<typeof Clear>;

export const Default: Story = { args: { size: 14 } };
