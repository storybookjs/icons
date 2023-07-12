import type { Meta, StoryObj } from '@storybook/react';

import { Contrast } from './Contrast';

const meta: Meta<typeof Contrast> = {
  component: Contrast,
};

export default meta;
type Story = StoryObj<typeof Contrast>;

export const Default: Story = { args: { size: 14 } };
