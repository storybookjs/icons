import type { Meta, StoryObj } from '@storybook/react';

import { LightningIcon } from './LightningIcon';

const meta: Meta<typeof LightningIcon> = {
  component: LightningIcon,
};

export default meta;
type Story = StoryObj<typeof LightningIcon>;

export const Default: Story = { args: { size: 100 } };
