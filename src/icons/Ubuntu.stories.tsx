import type { Meta, StoryObj } from '@storybook/react';

import { Ubuntu } from './Ubuntu';

const meta: Meta<typeof Ubuntu> = {
  component: Ubuntu,
};

export default meta;
type Story = StoryObj<typeof Ubuntu>;

export const Default: Story = { args: { size: 14 } };
