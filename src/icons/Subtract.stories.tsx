import type { Meta, StoryObj } from '@storybook/react';

import { Subtract } from './Subtract';

const meta: Meta<typeof Subtract> = {
  component: Subtract,
};

export default meta;
type Story = StoryObj<typeof Subtract>;

export const Default: Story = { args: { size: 14 } };
