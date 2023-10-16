import type { Meta, StoryObj } from '@storybook/react';

import { ChevronUp } from './ChevronUp';

const meta: Meta<typeof ChevronUp> = {
  component: ChevronUp,
};

export default meta;
type Story = StoryObj<typeof ChevronUp>;

export const Default: Story = { args: { size: 100 } };
