import type { Meta, StoryObj } from '@storybook/react';

import { UserIcon } from './UserIcon';

const meta: Meta<typeof UserIcon> = {
  component: UserIcon,
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = { args: { size: 100 } };
