import type { Meta, StoryObj } from '@storybook/react';

import { Power } from './Power';

const meta: Meta<typeof Power> = {
  component: Power,
};

export default meta;
type Story = StoryObj<typeof Power>;

export const Default: Story = { args: { size: 14 } };
