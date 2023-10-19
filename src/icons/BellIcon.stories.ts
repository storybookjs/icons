import type { Meta, StoryObj } from '@storybook/react';

import { BellIcon } from './BellIcon';

const meta: Meta<typeof BellIcon> = {
  component: BellIcon,
};

export default meta;
type Story = StoryObj<typeof BellIcon>;

export const Default: Story = { args: { size: 100 } };
