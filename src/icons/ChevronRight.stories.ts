import type { Meta, StoryObj } from '@storybook/react';

import { ChevronRight } from './ChevronRight';

const meta: Meta<typeof ChevronRight> = {
  component: ChevronRight,
};

export default meta;
type Story = StoryObj<typeof ChevronRight>;

export const Default: Story = { args: { size: 100 } };
