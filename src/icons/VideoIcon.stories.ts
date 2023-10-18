import type { Meta, StoryObj } from '@storybook/react';

import { VideoIcon } from './VideoIcon';

const meta: Meta<typeof VideoIcon> = {
  component: VideoIcon,
};

export default meta;
type Story = StoryObj<typeof VideoIcon>;

export const Default: Story = { args: { size: 100 } };
