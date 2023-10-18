import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidRightIcon } from './ArrowSolidRightIcon';

const meta: Meta<typeof ArrowSolidRightIcon> = {
  component: ArrowSolidRightIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidRightIcon>;

export const Default: Story = { args: { size: 100 } };
