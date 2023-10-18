import type { Meta, StoryObj } from '@storybook/react';

import { SunIcon } from './SunIcon';

const meta: Meta<typeof SunIcon> = {
  component: SunIcon,
};

export default meta;
type Story = StoryObj<typeof SunIcon>;

export const Default: Story = { args: { size: 100 } };
