import type { Meta, StoryObj } from '@storybook/react';

import { PointerDefault } from './PointerDefault';

const meta: Meta<typeof PointerDefault> = {
  component: PointerDefault,
};

export default meta;
type Story = StoryObj<typeof PointerDefault>;

export const Default: Story = { args: { size: 100 } };
