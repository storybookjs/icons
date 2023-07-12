import type { Meta, StoryObj } from '@storybook/react';

import { Users } from './Users';

const meta: Meta<typeof Users> = {
  component: Users,
};

export default meta;
type Story = StoryObj<typeof Users>;

export const Default: Story = { args: { size: 14 } };
