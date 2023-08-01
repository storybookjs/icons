import type { Meta, StoryObj } from '@storybook/react';

import { ListOrdered } from './ListOrdered';

const meta: Meta<typeof ListOrdered> = {
  component: ListOrdered,
};

export default meta;
type Story = StoryObj<typeof ListOrdered>;

export const Default: Story = { args: { size: 100 } };
