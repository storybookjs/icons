import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarIcon } from './SidebarIcon';

const meta: Meta<typeof SidebarIcon> = {
  component: SidebarIcon,
};

export default meta;
type Story = StoryObj<typeof SidebarIcon>;

export const Default: Story = { args: { size: 100 } };
