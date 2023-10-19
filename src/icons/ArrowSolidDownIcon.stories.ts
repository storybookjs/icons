import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidDownIcon } from './ArrowSolidDownIcon';

const meta: Meta<typeof ArrowSolidDownIcon> = {
  component: ArrowSolidDownIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidDownIcon>;

export const Default: Story = { args: { size: 100 } };
