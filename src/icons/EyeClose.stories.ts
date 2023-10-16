import type { Meta, StoryObj } from '@storybook/react';

import { EyeClose } from './EyeClose';

const meta: Meta<typeof EyeClose> = {
  component: EyeClose,
};

export default meta;
type Story = StoryObj<typeof EyeClose>;

export const Default: Story = { args: { size: 100 } };
