import type { Meta, StoryObj } from '@storybook/react';

import { Add } from './Add';

const meta: Meta<typeof Add> = {
  component: Add,
};

export default meta;
type Story = StoryObj<typeof Add>;

export const Default: Story = { args: { size: 14 } };
