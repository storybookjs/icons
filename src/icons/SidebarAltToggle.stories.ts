import type { Meta, StoryObj } from '@storybook/react';

import { SidebarAltToggle } from './SidebarAltToggle';

const meta: Meta<typeof SidebarAltToggle> = {
  component: SidebarAltToggle,
};

export default meta;
type Story = StoryObj<typeof SidebarAltToggle>;

export const Default: Story = { args: { size: 100 } };
