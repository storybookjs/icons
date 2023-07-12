import type { Meta, StoryObj } from '@storybook/react';

import { Circlehollow } from './Circlehollow';

const meta: Meta<typeof Circlehollow> = {
  component: Circlehollow,
};

export default meta;
type Story = StoryObj<typeof Circlehollow>;

export const Default: Story = { args: { size: 14 } };
