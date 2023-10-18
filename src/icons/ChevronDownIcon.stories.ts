import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDownIcon } from './ChevronDownIcon';

const meta: Meta<typeof ChevronDownIcon> = {
  component: ChevronDownIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronDownIcon>;

export const Default: Story = { args: { size: 100 } };
