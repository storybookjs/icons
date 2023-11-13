import type { Meta, StoryObj } from '@storybook/react';

import { ChevronSmallRightIcon } from './ChevronSmallRightIcon';

const meta: Meta<typeof ChevronSmallRightIcon> = {
  component: ChevronSmallRightIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronSmallRightIcon>;

export const Default: Story = { args: { size: 100 } };
