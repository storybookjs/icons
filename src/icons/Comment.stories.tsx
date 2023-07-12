import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
  component: Comment,
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Default: Story = { args: { size: 100 } };
