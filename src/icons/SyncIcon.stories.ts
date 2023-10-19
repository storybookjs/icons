import type { Meta, StoryObj } from '@storybook/react';

import { SyncIcon } from './SyncIcon';

const meta: Meta<typeof SyncIcon> = {
  component: SyncIcon,
};

export default meta;
type Story = StoryObj<typeof SyncIcon>;

export const Default: Story = { args: { size: 100 } };
