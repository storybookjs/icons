import type { Meta, StoryObj } from '@storybook/react';

import { Expand } from './Expand';

const meta: Meta<typeof Expand> = {
  component: Expand,
};

export default meta;
type Story = StoryObj<typeof Expand>;

export const Default: Story = { args: { size: 14 } };
