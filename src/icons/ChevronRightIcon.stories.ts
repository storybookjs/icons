import type { Meta, StoryObj } from '@storybook/react';

import { ChevronRightIcon } from './ChevronRightIcon';

const meta: Meta<typeof ChevronRightIcon> = {
  component: ChevronRightIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronRightIcon>;

export const Default: Story = { args: { size: 100 } };
