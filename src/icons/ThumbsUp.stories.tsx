import type { Meta, StoryObj } from '@storybook/react';

import { ThumbsUp } from './ThumbsUp';

const meta: Meta<typeof ThumbsUp> = {
  component: ThumbsUp,
};

export default meta;
type Story = StoryObj<typeof ThumbsUp>;

export const Default: Story = { args: { size: 100 } };
