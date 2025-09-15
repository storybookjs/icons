import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommentIcon } from './CommentIcon';

const meta: Meta<typeof CommentIcon> = {
  component: CommentIcon,
};

export default meta;
type Story = StoryObj<typeof CommentIcon>;

export const Default: Story = { args: { size: 100 } };
