import type { Meta, StoryObj } from '@storybook/react';

import { SidebarToggle } from './SidebarToggle';

const meta: Meta<typeof SidebarToggle> = {
  component: SidebarToggle,
};

export default meta;
type Story = StoryObj<typeof SidebarToggle>;

export const Default: Story = { args: { size: 100 } };
