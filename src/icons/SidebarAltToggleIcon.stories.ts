import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarAltToggleIcon } from './SidebarAltToggleIcon';

const meta: Meta<typeof SidebarAltToggleIcon> = {
  component: SidebarAltToggleIcon,
};

export default meta;
type Story = StoryObj<typeof SidebarAltToggleIcon>;

export const Default: Story = { args: { size: 100 } };
