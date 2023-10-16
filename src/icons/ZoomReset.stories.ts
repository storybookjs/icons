import type { Meta, StoryObj } from '@storybook/react';

import { ZoomReset } from './ZoomReset';

const meta: Meta<typeof ZoomReset> = {
  component: ZoomReset,
};

export default meta;
type Story = StoryObj<typeof ZoomReset>;

export const Default: Story = { args: { size: 100 } };
