import type { Meta, StoryObj } from '@storybook/react';

import { UserAdd } from './UserAdd';

const meta: Meta<typeof UserAdd> = {
  component: UserAdd,
};

export default meta;
type Story = StoryObj<typeof UserAdd>;

export const Default: Story = { args: { size: 100 } };
