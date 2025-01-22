import type { Meta, StoryObj } from '@storybook/react';

import { PhotoStabilizeIcon } from './PhotoStabilizeIcon';

const meta: Meta<typeof PhotoStabilizeIcon> = {
  component: PhotoStabilizeIcon,
};

export default meta;
type Story = StoryObj<typeof PhotoStabilizeIcon>;

export const Default: Story = { args: { size: 100 } };
