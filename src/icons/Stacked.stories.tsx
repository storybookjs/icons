import type { Meta, StoryObj } from '@storybook/react';

import { Stacked } from './Stacked';

const meta: Meta<typeof Stacked> = {
  component: Stacked,
};

export default meta;
type Story = StoryObj<typeof Stacked>;

export const Default: Story = { args: { size: 14 } };
