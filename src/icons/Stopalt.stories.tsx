import type { Meta, StoryObj } from '@storybook/react';

import { Stopalt } from './Stopalt';

const meta: Meta<typeof Stopalt> = {
  component: Stopalt,
};

export default meta;
type Story = StoryObj<typeof Stopalt>;

export const Default: Story = { args: { size: 14 } };
