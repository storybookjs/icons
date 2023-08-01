import type { Meta, StoryObj } from '@storybook/react';

import { ListUnordered } from './ListUnordered';

const meta: Meta<typeof ListUnordered> = {
  component: ListUnordered,
};

export default meta;
type Story = StoryObj<typeof ListUnordered>;

export const Default: Story = { args: { size: 100 } };
