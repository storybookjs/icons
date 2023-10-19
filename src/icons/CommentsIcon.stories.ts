import type { Meta, StoryObj } from '@storybook/react';

import { CommentsIcon } from './CommentsIcon';

const meta: Meta<typeof CommentsIcon> = {
  component: CommentsIcon,
};

export default meta;
type Story = StoryObj<typeof CommentsIcon>;

export const Default: Story = { args: { size: 100 } };
