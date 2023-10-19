import type { Meta, StoryObj } from '@storybook/react';

import { MenuIcon } from './MenuIcon';

const meta: Meta<typeof MenuIcon> = {
  component: MenuIcon,
};

export default meta;
type Story = StoryObj<typeof MenuIcon>;

export const Default: Story = { args: { size: 100 } };
