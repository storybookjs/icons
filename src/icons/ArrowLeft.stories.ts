import type { Meta, StoryObj } from '@storybook/react';

import { ArrowLeft } from './ArrowLeft';

const meta: Meta<typeof ArrowLeft> = {
  component: ArrowLeft,
};

export default meta;
type Story = StoryObj<typeof ArrowLeft>;

export const Default: Story = { args: { size: 100 } };
