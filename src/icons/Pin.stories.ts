import type { Meta, StoryObj } from '@storybook/react';

import { Pin } from './Pin';

const meta: Meta<typeof Pin> = {
  component: Pin,
};

export default meta;
type Story = StoryObj<typeof Pin>;

export const Default: Story = { args: { size: 100 } };
