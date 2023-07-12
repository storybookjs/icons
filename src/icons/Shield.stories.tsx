import type { Meta, StoryObj } from '@storybook/react';

import { Shield } from './Shield';

const meta: Meta<typeof Shield> = {
  component: Shield,
};

export default meta;
type Story = StoryObj<typeof Shield>;

export const Default: Story = { args: { size: 14 } };
