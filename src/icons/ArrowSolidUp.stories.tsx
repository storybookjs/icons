import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidUp } from './ArrowSolidUp';

const meta: Meta<typeof ArrowSolidUp> = {
  component: ArrowSolidUp,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidUp>;

export const Default: Story = { args: { size: 100 } };
