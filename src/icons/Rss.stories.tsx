import type { Meta, StoryObj } from '@storybook/react';

import { RSS } from './RSS';

const meta: Meta<typeof RSS> = {
  component: RSS,
};

export default meta;
type Story = StoryObj<typeof RSS>;

export const Default: Story = { args: { size: 100 } };
