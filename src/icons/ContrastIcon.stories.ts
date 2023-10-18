import type { Meta, StoryObj } from '@storybook/react';

import { ContrastIcon } from './ContrastIcon';

const meta: Meta<typeof ContrastIcon> = {
  component: ContrastIcon,
};

export default meta;
type Story = StoryObj<typeof ContrastIcon>;

export const Default: Story = { args: { size: 100 } };
