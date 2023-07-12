import type { Meta, StoryObj } from '@storybook/react';

import { Hourglass } from './Hourglass';

const meta: Meta<typeof Hourglass> = {
  component: Hourglass,
};

export default meta;
type Story = StoryObj<typeof Hourglass>;

export const Default: Story = { args: { size: 14 } };
