import type { Meta, StoryObj } from '@storybook/react';

import { Batchdeny } from './Batchdeny';

const meta: Meta<typeof Batchdeny> = {
  component: Batchdeny,
};

export default meta;
type Story = StoryObj<typeof Batchdeny>;

export const Default: Story = { args: { size: 14 } };
