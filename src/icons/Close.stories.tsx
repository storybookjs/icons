import type { Meta, StoryObj } from '@storybook/react';

import { Close } from './Close';

const meta: Meta<typeof Close> = {
  component: Close,
};

export default meta;
type Story = StoryObj<typeof Close>;

export const Default: Story = { args: { size: 100 } };
