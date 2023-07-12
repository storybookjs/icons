import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = { args: { size: 14 } };
