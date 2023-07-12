import type { Meta, StoryObj } from '@storybook/react';

import { Ruler } from './Ruler';

const meta: Meta<typeof Ruler> = {
  component: Ruler,
};

export default meta;
type Story = StoryObj<typeof Ruler>;

export const Default: Story = { args: { size: 100 } };
