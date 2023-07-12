import type { Meta, StoryObj } from '@storybook/react';

import { Linux } from './Linux';

const meta: Meta<typeof Linux> = {
  component: Linux,
};

export default meta;
type Story = StoryObj<typeof Linux>;

export const Default: Story = { args: { size: 100 } };
