import type { Meta, StoryObj } from '@storybook/react';

import { Refresh } from './Refresh';

const meta: Meta<typeof Refresh> = {
  component: Refresh,
};

export default meta;
type Story = StoryObj<typeof Refresh>;

export const Default: Story = { args: { size: 14 } };
