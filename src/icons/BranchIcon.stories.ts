import type { Meta, StoryObj } from '@storybook/react';

import { BranchIcon } from './BranchIcon';

const meta: Meta<typeof BranchIcon> = {
  component: BranchIcon,
};

export default meta;
type Story = StoryObj<typeof BranchIcon>;

export const Default: Story = { args: { size: 100 } };
