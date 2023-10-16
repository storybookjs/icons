import type { Meta, StoryObj } from '@storybook/react';

import { JumpTo } from './JumpTo';

const meta: Meta<typeof JumpTo> = {
  component: JumpTo,
};

export default meta;
type Story = StoryObj<typeof JumpTo>;

export const Default: Story = { args: { size: 100 } };
