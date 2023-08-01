import type { Meta, StoryObj } from '@storybook/react';

import { LightningOff } from './LightningOff';

const meta: Meta<typeof LightningOff> = {
  component: LightningOff,
};

export default meta;
type Story = StoryObj<typeof LightningOff>;

export const Default: Story = { args: { size: 100 } };
