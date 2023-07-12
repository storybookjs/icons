import type { Meta, StoryObj } from '@storybook/react';

import { Starhollow } from './Starhollow';

const meta: Meta<typeof Starhollow> = {
  component: Starhollow,
};

export default meta;
type Story = StoryObj<typeof Starhollow>;

export const Default: Story = { args: { size: 14 } };
