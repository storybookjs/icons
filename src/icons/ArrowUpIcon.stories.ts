import type { Meta, StoryObj } from '@storybook/react';

import { ArrowUpIcon } from './ArrowUpIcon';

const meta: Meta<typeof ArrowUpIcon> = {
  component: ArrowUpIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowUpIcon>;

export const Default: Story = { args: { size: 100 } };
