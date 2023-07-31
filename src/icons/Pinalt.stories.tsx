import type { Meta, StoryObj } from '@storybook/react';

import { Pinalt } from './Pinalt';

const meta: Meta<typeof Pinalt> = {
  component: Pinalt,
};

export default meta;
type Story = StoryObj<typeof Pinalt>;

export const Default: Story = { args: { size: 100 } };
