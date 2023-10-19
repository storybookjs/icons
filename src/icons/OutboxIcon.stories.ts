import type { Meta, StoryObj } from '@storybook/react';

import { OutboxIcon } from './OutboxIcon';

const meta: Meta<typeof OutboxIcon> = {
  component: OutboxIcon,
};

export default meta;
type Story = StoryObj<typeof OutboxIcon>;

export const Default: Story = { args: { size: 100 } };
