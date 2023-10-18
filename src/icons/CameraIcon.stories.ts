import type { Meta, StoryObj } from '@storybook/react';

import { CameraIcon } from './CameraIcon';

const meta: Meta<typeof CameraIcon> = {
  component: CameraIcon,
};

export default meta;
type Story = StoryObj<typeof CameraIcon>;

export const Default: Story = { args: { size: 100 } };
