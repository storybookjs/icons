import type { Meta, StoryObj } from '@storybook/react';

import { CommentAddIcon } from './CommentAddIcon';

const meta: Meta<typeof CommentAddIcon> = {
  component: CommentAddIcon,
};

export default meta;
type Story = StoryObj<typeof CommentAddIcon>;

export const Default: Story = { args: { size: 100 } };
