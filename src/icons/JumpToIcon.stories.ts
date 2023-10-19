import type { Meta, StoryObj } from '@storybook/react';

import { JumpToIcon } from './JumpToIcon';

const meta: Meta<typeof JumpToIcon> = {
  component: JumpToIcon,
};

export default meta;
type Story = StoryObj<typeof JumpToIcon>;

export const Default: Story = { args: { size: 100 } };
