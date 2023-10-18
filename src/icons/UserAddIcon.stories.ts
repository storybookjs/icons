import type { Meta, StoryObj } from '@storybook/react';

import { UserAddIcon } from './UserAddIcon';

const meta: Meta<typeof UserAddIcon> = {
  component: UserAddIcon,
};

export default meta;
type Story = StoryObj<typeof UserAddIcon>;

export const Default: Story = { args: { size: 100 } };
