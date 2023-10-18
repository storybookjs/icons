import type { Meta, StoryObj } from '@storybook/react';

import { ArrowDownIcon } from './ArrowDownIcon';

const meta: Meta<typeof ArrowDownIcon> = {
  component: ArrowDownIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowDownIcon>;

export const Default: Story = { args: { size: 100 } };
