import type { Meta, StoryObj } from '@storybook/react';

import { Direction } from './Direction';

const meta: Meta<typeof Direction> = {
  component: Direction,
};

export default meta;
type Story = StoryObj<typeof Direction>;

export const Default: Story = { args: { size: 100 } };
