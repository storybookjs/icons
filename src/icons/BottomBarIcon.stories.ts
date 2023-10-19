import type { Meta, StoryObj } from '@storybook/react';

import { BottomBarIcon } from './BottomBarIcon';

const meta: Meta<typeof BottomBarIcon> = {
  component: BottomBarIcon,
};

export default meta;
type Story = StoryObj<typeof BottomBarIcon>;

export const Default: Story = { args: { size: 100 } };
