import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRight } from './ArrowRight';

const meta: Meta<typeof ArrowRight> = {
  component: ArrowRight,
};

export default meta;
type Story = StoryObj<typeof ArrowRight>;

export const Default: Story = { args: { size: 100 } };
