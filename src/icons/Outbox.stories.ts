import type { Meta, StoryObj } from '@storybook/react';

import { Outbox } from './Outbox';

const meta: Meta<typeof Outbox> = {
  component: Outbox,
};

export default meta;
type Story = StoryObj<typeof Outbox>;

export const Default: Story = { args: { size: 100 } };
