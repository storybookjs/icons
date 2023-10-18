import type { Meta, StoryObj } from '@storybook/react';

import { WindowsIcon } from './WindowsIcon';

const meta: Meta<typeof WindowsIcon> = {
  component: WindowsIcon,
};

export default meta;
type Story = StoryObj<typeof WindowsIcon>;

export const Default: Story = { args: { size: 100 } };
