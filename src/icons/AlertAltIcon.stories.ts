import type { Meta, StoryObj } from '@storybook/react';

import { AlertAltIcon } from './AlertAltIcon';

const meta: Meta<typeof AlertAltIcon> = {
  component: AlertAltIcon,
};

export default meta;
type Story = StoryObj<typeof AlertAltIcon>;

export const Default: Story = { args: { size: 100 } };
