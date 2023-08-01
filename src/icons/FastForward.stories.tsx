import type { Meta, StoryObj } from '@storybook/react';

import { FastForward } from './FastForward';

const meta: Meta<typeof FastForward> = {
  component: FastForward,
};

export default meta;
type Story = StoryObj<typeof FastForward>;

export const Default: Story = { args: { size: 100 } };
