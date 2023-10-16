import type { Meta, StoryObj } from '@storybook/react';

import { SidebarAlt } from './SidebarAlt';

const meta: Meta<typeof SidebarAlt> = {
  component: SidebarAlt,
};

export default meta;
type Story = StoryObj<typeof SidebarAlt>;

export const Default: Story = { args: { size: 100 } };
