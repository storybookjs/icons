import type { Meta, StoryObj } from '@storybook/react';

import { Cross } from './Cross';

const meta: Meta<typeof Cross> = {
  component: Cross,
};

export default meta;
type Story = StoryObj<typeof Cross>;

export const Default: Story = { args: { size: 14 } };
