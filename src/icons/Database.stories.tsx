import type { Meta, StoryObj } from '@storybook/react';

import { Database } from './Database';

const meta: Meta<typeof Database> = {
  component: Database,
};

export default meta;
type Story = StoryObj<typeof Database>;

export const Default: Story = { args: { size: 14 } };
