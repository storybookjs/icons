import type { Meta, StoryObj } from '@storybook/react';

import { UserAltIcon } from './UserAltIcon';

const meta: Meta<typeof UserAltIcon> = {
  component: UserAltIcon,
};

export default meta;
type Story = StoryObj<typeof UserAltIcon>;

export const Default: Story = { args: { size: 100 } };
