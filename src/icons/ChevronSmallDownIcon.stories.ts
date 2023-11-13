import type { Meta, StoryObj } from '@storybook/react';

import { ChevronSmallDownIcon } from './ChevronSmallDownIcon';

const meta: Meta<typeof ChevronSmallDownIcon> = {
  component: ChevronSmallDownIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronSmallDownIcon>;

export const Default: Story = { args: { size: 100 } };
