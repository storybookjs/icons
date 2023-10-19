import type { Meta, StoryObj } from '@storybook/react';

import { AlertIcon } from './AlertIcon';

const meta: Meta<typeof AlertIcon> = {
  component: AlertIcon,
};

export default meta;
type Story = StoryObj<typeof AlertIcon>;

export const Default: Story = { args: { size: 100 } };
