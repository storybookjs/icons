import type { Meta, StoryObj } from '@storybook/react';

import { CommentAdd } from './CommentAdd';

const meta: Meta<typeof CommentAdd> = {
  component: CommentAdd,
};

export default meta;
type Story = StoryObj<typeof CommentAdd>;

export const Default: Story = { args: { size: 100 } };
