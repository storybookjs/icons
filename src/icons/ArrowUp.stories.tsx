import type { Meta, StoryObj } from '@storybook/react';

import { ArrowUp } from './ArrowUp';

const meta: Meta<typeof ArrowUp> = {
  component: ArrowUp,
};

export default meta;
type Story = StoryObj<typeof ArrowUp>;

export const Default: Story = { args: { size: 100 } };
