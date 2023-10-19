import type { Meta, StoryObj } from '@storybook/react';

import { ChevronLeftIcon } from './ChevronLeftIcon';

const meta: Meta<typeof ChevronLeftIcon> = {
  component: ChevronLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronLeftIcon>;

export const Default: Story = { args: { size: 100 } };
