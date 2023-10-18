import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidUpIcon } from './ArrowSolidUpIcon';

const meta: Meta<typeof ArrowSolidUpIcon> = {
  component: ArrowSolidUpIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidUpIcon>;

export const Default: Story = { args: { size: 100 } };
