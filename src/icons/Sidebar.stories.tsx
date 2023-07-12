import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = { args: { size: 14 } };
