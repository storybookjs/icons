import type { Meta, StoryObj } from '@storybook/react';

import { HourglassIcon } from './HourglassIcon';

const meta: Meta<typeof HourglassIcon> = {
  component: HourglassIcon,
};

export default meta;
type Story = StoryObj<typeof HourglassIcon>;

export const Default: Story = { args: { size: 100 } };
