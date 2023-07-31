import type { Meta, StoryObj } from '@storybook/react';

import { Bottombartoggle } from './Bottombartoggle';

const meta: Meta<typeof Bottombartoggle> = {
  component: Bottombartoggle,
};

export default meta;
type Story = StoryObj<typeof Bottombartoggle>;

export const Default: Story = { args: { size: 100 } };
