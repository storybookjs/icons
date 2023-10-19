import type { Meta, StoryObj } from '@storybook/react';

import { LightningOffIcon } from './LightningOffIcon';

const meta: Meta<typeof LightningOffIcon> = {
  component: LightningOffIcon,
};

export default meta;
type Story = StoryObj<typeof LightningOffIcon>;

export const Default: Story = { args: { size: 100 } };
