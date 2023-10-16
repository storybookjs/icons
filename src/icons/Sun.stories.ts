import type { Meta, StoryObj } from '@storybook/react';

import { Sun } from './Sun';

const meta: Meta<typeof Sun> = {
  component: Sun,
};

export default meta;
type Story = StoryObj<typeof Sun>;

export const Default: Story = { args: { size: 100 } };
