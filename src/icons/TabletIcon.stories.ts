import type { Meta, StoryObj } from '@storybook/react';

import { TabletIcon } from './TabletIcon';

const meta: Meta<typeof TabletIcon> = {
  component: TabletIcon,
};

export default meta;
type Story = StoryObj<typeof TabletIcon>;

export const Default: Story = { args: { size: 100 } };
