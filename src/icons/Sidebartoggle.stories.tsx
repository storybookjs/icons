import type { Meta, StoryObj } from '@storybook/react';

import { Sidebartoggle } from './Sidebartoggle';

const meta: Meta<typeof Sidebartoggle> = {
  component: Sidebartoggle,
};

export default meta;
type Story = StoryObj<typeof Sidebartoggle>;

export const Default: Story = { args: { size: 100 } };
