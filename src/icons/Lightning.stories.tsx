import type { Meta, StoryObj } from '@storybook/react';

import { Lightning } from './Lightning';

const meta: Meta<typeof Lightning> = {
  component: Lightning,
};

export default meta;
type Story = StoryObj<typeof Lightning>;

export const Default: Story = { args: { size: 14 } };
