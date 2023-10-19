import type { Meta, StoryObj } from '@storybook/react';

import { ZoomIcon } from './ZoomIcon';

const meta: Meta<typeof ZoomIcon> = {
  component: ZoomIcon,
};

export default meta;
type Story = StoryObj<typeof ZoomIcon>;

export const Default: Story = { args: { size: 100 } };
