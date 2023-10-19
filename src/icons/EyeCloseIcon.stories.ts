import type { Meta, StoryObj } from '@storybook/react';

import { EyeCloseIcon } from './EyeCloseIcon';

const meta: Meta<typeof EyeCloseIcon> = {
  component: EyeCloseIcon,
};

export default meta;
type Story = StoryObj<typeof EyeCloseIcon>;

export const Default: Story = { args: { size: 100 } };
