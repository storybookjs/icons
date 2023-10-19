import type { Meta, StoryObj } from '@storybook/react';

import { AdminIcon } from './AdminIcon';

const meta: Meta<typeof AdminIcon> = {
  component: AdminIcon,
};

export default meta;
type Story = StoryObj<typeof AdminIcon>;

export const Default: Story = { args: { size: 100 } };
