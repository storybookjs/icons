import type { Meta, StoryObj } from '@storybook/react';

import { Sync } from './Sync';

const meta: Meta<typeof Sync> = {
  component: Sync,
};

export default meta;
type Story = StoryObj<typeof Sync>;

export const Default: Story = { args: { size: 100 } };
