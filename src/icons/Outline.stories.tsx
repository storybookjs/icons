import type { Meta, StoryObj } from '@storybook/react';

import { Outline } from './Outline';

const meta: Meta<typeof Outline> = {
  component: Outline,
};

export default meta;
type Story = StoryObj<typeof Outline>;

export const Default: Story = { args: { size: 14 } };
