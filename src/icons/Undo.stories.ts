import type { Meta, StoryObj } from '@storybook/react';

import { Undo } from './Undo';

const meta: Meta<typeof Undo> = {
  component: Undo,
};

export default meta;
type Story = StoryObj<typeof Undo>;

export const Default: Story = { args: { size: 100 } };
