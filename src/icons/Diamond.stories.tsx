import type { Meta, StoryObj } from '@storybook/react';

import { Diamond } from './Diamond';

const meta: Meta<typeof Diamond> = {
  component: Diamond,
};

export default meta;
type Story = StoryObj<typeof Diamond>;

export const Default: Story = { args: { size: 100 } };
