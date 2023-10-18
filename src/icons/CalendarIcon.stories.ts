import type { Meta, StoryObj } from '@storybook/react';

import { CalendarIcon } from './CalendarIcon';

const meta: Meta<typeof CalendarIcon> = {
  component: CalendarIcon,
};

export default meta;
type Story = StoryObj<typeof CalendarIcon>;

export const Default: Story = { args: { size: 100 } };
