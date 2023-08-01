import type { Meta, StoryObj } from '@storybook/react';

import { BottomBarToggle } from './BottomBarToggle';

const meta: Meta<typeof BottomBarToggle> = {
  component: BottomBarToggle,
};

export default meta;
type Story = StoryObj<typeof BottomBarToggle>;

export const Default: Story = { args: { size: 100 } };
