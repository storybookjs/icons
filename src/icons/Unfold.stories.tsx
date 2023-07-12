import type { Meta, StoryObj } from '@storybook/react';

import { Unfold } from './Unfold';

const meta: Meta<typeof Unfold> = {
  component: Unfold,
};

export default meta;
type Story = StoryObj<typeof Unfold>;

export const Default: Story = { args: { size: 14 } };
