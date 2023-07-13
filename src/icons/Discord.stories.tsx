import type { Meta, StoryObj } from '@storybook/react';

import { Discord } from './Discord';

const meta: Meta<typeof Discord> = {
  component: Discord,
};

export default meta;
type Story = StoryObj<typeof Discord>;

export const Default: Story = { args: { size: 100 } };
