import type { Meta, StoryObj } from '@storybook/react';

import { Cpu } from './Cpu';

const meta: Meta<typeof Cpu> = {
  component: Cpu,
};

export default meta;
type Story = StoryObj<typeof Cpu>;

export const Default: Story = { args: { size: 14 } };
