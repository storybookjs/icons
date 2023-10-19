import type { Meta, StoryObj } from '@storybook/react';

import { UsersIcon } from './UsersIcon';

const meta: Meta<typeof UsersIcon> = {
  component: UsersIcon,
};

export default meta;
type Story = StoryObj<typeof UsersIcon>;

export const Default: Story = { args: { size: 100 } };
