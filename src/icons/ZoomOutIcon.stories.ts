import type { Meta, StoryObj } from '@storybook/react';

import { ZoomOutIcon } from './ZoomOutIcon';

const meta: Meta<typeof ZoomOutIcon> = {
  component: ZoomOutIcon,
};

export default meta;
type Story = StoryObj<typeof ZoomOutIcon>;

export const Default: Story = { args: { size: 100 } };
