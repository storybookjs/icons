import type { Meta, StoryObj } from '@storybook/react';

import { Trash } from './Trash';

const meta: Meta<typeof Trash> = {
  component: Trash,
};

export default meta;
type Story = StoryObj<typeof Trash>;

export const Default: Story = { args: { size: 100 } };
