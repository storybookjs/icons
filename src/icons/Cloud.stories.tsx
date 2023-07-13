import type { Meta, StoryObj } from '@storybook/react';

import { Cloud } from './Cloud';

const meta: Meta<typeof Cloud> = {
  component: Cloud,
};

export default meta;
type Story = StoryObj<typeof Cloud>;

export const Default: Story = { args: { size: 100 } };
