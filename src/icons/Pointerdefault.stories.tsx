import type { Meta, StoryObj } from '@storybook/react';

import { Pointerdefault } from './Pointerdefault';

const meta: Meta<typeof Pointerdefault> = {
  component: Pointerdefault,
};

export default meta;
type Story = StoryObj<typeof Pointerdefault>;

export const Default: Story = { args: { size: 100 } };
