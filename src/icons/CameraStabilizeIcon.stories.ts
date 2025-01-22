import type { Meta, StoryObj } from '@storybook/react';

import { CameraStabilizeIcon } from './CameraStabilizeIcon';

const meta: Meta<typeof CameraStabilizeIcon> = {
  component: CameraStabilizeIcon,
};

export default meta;
type Story = StoryObj<typeof CameraStabilizeIcon>;

export const Default: Story = { args: { size: 100 } };
