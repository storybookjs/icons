import type { Meta, StoryObj } from '@storybook/react';

import { ThumbsUpIcon } from './ThumbsUpIcon';

const meta: Meta<typeof ThumbsUpIcon> = {
  component: ThumbsUpIcon,
};

export default meta;
type Story = StoryObj<typeof ThumbsUpIcon>;

export const Default: Story = { args: { size: 100 } };
