import type { Meta, StoryObj } from '@storybook/react';

import { Sidebaralttoggle } from './Sidebaralttoggle';

const meta: Meta<typeof Sidebaralttoggle> = {
  component: Sidebaralttoggle,
};

export default meta;
type Story = StoryObj<typeof Sidebaralttoggle>;

export const Default: Story = { args: { size: 100 } };
