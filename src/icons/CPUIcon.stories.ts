import type { Meta, StoryObj } from '@storybook/react';

import { CPUIcon } from './CPUIcon';

const meta: Meta<typeof CPUIcon> = {
  component: CPUIcon,
};

export default meta;
type Story = StoryObj<typeof CPUIcon>;

export const Default: Story = { args: { size: 100 } };
