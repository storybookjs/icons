import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidRight } from './ArrowSolidRight';

const meta: Meta<typeof ArrowSolidRight> = {
  component: ArrowSolidRight,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidRight>;

export const Default: Story = { args: { size: 100 } };
