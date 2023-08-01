import type { Meta, StoryObj } from '@storybook/react';

import { Category } from './Category';

const meta: Meta<typeof Category> = {
  component: Category,
};

export default meta;
type Story = StoryObj<typeof Category>;

export const Default: Story = { args: { size: 100 } };
