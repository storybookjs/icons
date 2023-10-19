import type { Meta, StoryObj } from '@storybook/react';

import { SidebarAltIcon } from './SidebarAltIcon';

const meta: Meta<typeof SidebarAltIcon> = {
  component: SidebarAltIcon,
};

export default meta;
type Story = StoryObj<typeof SidebarAltIcon>;

export const Default: Story = { args: { size: 100 } };
