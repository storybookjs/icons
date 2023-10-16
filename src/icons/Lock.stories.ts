import type { Meta, StoryObj } from '@storybook/react';

import { Lock } from './Lock';

const meta: Meta<typeof Lock> = {
  component: Lock,
};

export default meta;
type Story = StoryObj<typeof Lock>;

export const Default: Story = { args: { size: 100 } };
