import type { Meta, StoryObj } from '@storybook/react';

import { Commit } from './Commit';

const meta: Meta<typeof Commit> = {
  component: Commit,
};

export default meta;
type Story = StoryObj<typeof Commit>;

export const Default: Story = { args: { size: 100 } };
