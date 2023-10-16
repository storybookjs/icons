import type { Meta, StoryObj } from '@storybook/react';

import { Unpin } from './Unpin';

const meta: Meta<typeof Unpin> = {
  component: Unpin,
};

export default meta;
type Story = StoryObj<typeof Unpin>;

export const Default: Story = { args: { size: 100 } };
