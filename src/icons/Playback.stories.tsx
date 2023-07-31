import type { Meta, StoryObj } from '@storybook/react';

import { Playback } from './Playback';

const meta: Meta<typeof Playback> = {
  component: Playback,
};

export default meta;
type Story = StoryObj<typeof Playback>;

export const Default: Story = { args: { size: 100 } };
