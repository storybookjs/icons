import type { Meta, StoryObj } from '@storybook/react';

import { BottomBarToggleIcon } from './BottomBarToggleIcon';

const meta: Meta<typeof BottomBarToggleIcon> = {
  component: BottomBarToggleIcon,
};

export default meta;
type Story = StoryObj<typeof BottomBarToggleIcon>;

export const Default: Story = { args: { size: 100 } };
