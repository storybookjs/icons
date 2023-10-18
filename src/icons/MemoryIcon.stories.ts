import type { Meta, StoryObj } from '@storybook/react';

import { MemoryIcon } from './MemoryIcon';

const meta: Meta<typeof MemoryIcon> = {
  component: MemoryIcon,
};

export default meta;
type Story = StoryObj<typeof MemoryIcon>;

export const Default: Story = { args: { size: 100 } };
