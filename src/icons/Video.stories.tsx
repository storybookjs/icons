import type { Meta, StoryObj } from '@storybook/react';

import { Video } from './Video';

const meta: Meta<typeof Video> = {
  component: Video,
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = { args: { size: 100 } };
