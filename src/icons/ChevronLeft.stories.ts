import type { Meta, StoryObj } from '@storybook/react';

import { ChevronLeft } from './ChevronLeft';

const meta: Meta<typeof ChevronLeft> = {
  component: ChevronLeft,
};

export default meta;
type Story = StoryObj<typeof ChevronLeft>;

export const Default: Story = { args: { size: 100 } };
