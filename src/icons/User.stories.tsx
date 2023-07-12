import type { Meta, StoryObj } from '@storybook/react';

import { User } from './User';

const meta: Meta<typeof User> = {
  component: User,
};

export default meta;
type Story = StoryObj<typeof User>;

export const Default: Story = { args: { size: 14 } };
