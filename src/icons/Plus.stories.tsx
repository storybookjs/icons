import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from './Plus';

const meta: Meta<typeof Plus> = {
  component: Plus,
};

export default meta;
type Story = StoryObj<typeof Plus>;

export const Default: Story = { args: { size: 14 } };
