import type { Meta, StoryObj } from '@storybook/react';

import { DashboardIcon } from './DashboardIcon';

const meta: Meta<typeof DashboardIcon> = {
  component: DashboardIcon,
};

export default meta;
type Story = StoryObj<typeof DashboardIcon>;

export const Default: Story = { args: { size: 100 } };
