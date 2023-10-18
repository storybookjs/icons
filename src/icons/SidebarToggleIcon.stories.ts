import type { Meta, StoryObj } from '@storybook/react';

import { SidebarToggleIcon } from './SidebarToggleIcon';

const meta: Meta<typeof SidebarToggleIcon> = {
  component: SidebarToggleIcon,
};

export default meta;
type Story = StoryObj<typeof SidebarToggleIcon>;

export const Default: Story = { args: { size: 100 } };
