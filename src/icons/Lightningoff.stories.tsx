import type { Meta, StoryObj } from '@storybook/react';

import { Lightningoff } from './Lightningoff';

const meta: Meta<typeof Lightningoff> = {
  component: Lightningoff,
};

export default meta;
type Story = StoryObj<typeof Lightningoff>;

export const Default: Story = { args: { size: 100 } };
