import type { Meta, StoryObj } from '@storybook/react';

import { StatusIcon } from './StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  component: StatusIcon,
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

export const Default: Story = { args: { size: 100 } };
