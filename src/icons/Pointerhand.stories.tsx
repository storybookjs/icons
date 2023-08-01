import type { Meta, StoryObj } from '@storybook/react';

import { PointerHand } from './PointerHand';

const meta: Meta<typeof PointerHand> = {
  component: PointerHand,
};

export default meta;
type Story = StoryObj<typeof PointerHand>;

export const Default: Story = { args: { size: 100 } };
