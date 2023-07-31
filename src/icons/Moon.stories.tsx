import type { Meta, StoryObj } from '@storybook/react';

import { Moon } from './Moon';

const meta: Meta<typeof Moon> = {
  component: Moon,
};

export default meta;
type Story = StoryObj<typeof Moon>;

export const Default: Story = { args: { size: 100 } };
