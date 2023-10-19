import type { Meta, StoryObj } from '@storybook/react';

import { FastForwardIcon } from './FastForwardIcon';

const meta: Meta<typeof FastForwardIcon> = {
  component: FastForwardIcon,
};

export default meta;
type Story = StoryObj<typeof FastForwardIcon>;

export const Default: Story = { args: { size: 100 } };
