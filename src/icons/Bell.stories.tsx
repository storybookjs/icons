import type { Meta, StoryObj } from '@storybook/react';

import { Bell } from './Bell';

const meta: Meta<typeof Bell> = {
  component: Bell,
};

export default meta;
type Story = StoryObj<typeof Bell>;

export const Default: Story = { args: { size: 100 } };
