import type { Meta, StoryObj } from '@storybook/react';

import { PaintBrush } from './PaintBrush';

const meta: Meta<typeof PaintBrush> = {
  component: PaintBrush,
};

export default meta;
type Story = StoryObj<typeof PaintBrush>;

export const Default: Story = { args: { size: 100 } };
