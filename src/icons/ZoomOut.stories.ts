import type { Meta, StoryObj } from '@storybook/react';

import { ZoomOut } from './ZoomOut';

const meta: Meta<typeof ZoomOut> = {
  component: ZoomOut,
};

export default meta;
type Story = StoryObj<typeof ZoomOut>;

export const Default: Story = { args: { size: 100 } };
