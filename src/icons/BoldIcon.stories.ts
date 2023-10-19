import type { Meta, StoryObj } from '@storybook/react';

import { BoldIcon } from './BoldIcon';

const meta: Meta<typeof BoldIcon> = {
  component: BoldIcon,
};

export default meta;
type Story = StoryObj<typeof BoldIcon>;

export const Default: Story = { args: { size: 100 } };
