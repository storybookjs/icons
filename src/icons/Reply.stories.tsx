import type { Meta, StoryObj } from '@storybook/react';

import { Reply } from './Reply';

const meta: Meta<typeof Reply> = {
  component: Reply,
};

export default meta;
type Story = StoryObj<typeof Reply>;

export const Default: Story = { args: { size: 14 } };
