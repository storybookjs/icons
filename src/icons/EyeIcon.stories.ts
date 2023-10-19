import type { Meta, StoryObj } from '@storybook/react';

import { EyeIcon } from './EyeIcon';

const meta: Meta<typeof EyeIcon> = {
  component: EyeIcon,
};

export default meta;
type Story = StoryObj<typeof EyeIcon>;

export const Default: Story = { args: { size: 100 } };
