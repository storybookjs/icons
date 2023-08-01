import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidDown } from './ArrowSolidDown';

const meta: Meta<typeof ArrowSolidDown> = {
  component: ArrowSolidDown,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidDown>;

export const Default: Story = { args: { size: 100 } };
