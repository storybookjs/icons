import type { Meta, StoryObj } from '@storybook/react';

import { YoutubeIcon } from './YoutubeIcon';

const meta: Meta<typeof YoutubeIcon> = {
  component: YoutubeIcon,
};

export default meta;
type Story = StoryObj<typeof YoutubeIcon>;

export const Default: Story = { args: { size: 100 } };
