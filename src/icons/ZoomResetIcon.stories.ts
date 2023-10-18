import type { Meta, StoryObj } from '@storybook/react';

import { ZoomResetIcon } from './ZoomResetIcon';

const meta: Meta<typeof ZoomResetIcon> = {
  component: ZoomResetIcon,
};

export default meta;
type Story = StoryObj<typeof ZoomResetIcon>;

export const Default: Story = { args: { size: 100 } };
