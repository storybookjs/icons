import type { Meta, StoryObj } from '@storybook/react';

import { Copy } from './Copy';

const meta: Meta<typeof Copy> = {
  component: Copy,
};

export default meta;
type Story = StoryObj<typeof Copy>;

export const Default: Story = { args: { size: 14 } };
