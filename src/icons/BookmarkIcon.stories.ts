import type { Meta, StoryObj } from '@storybook/react';

import { BookmarkIcon } from './BookmarkIcon';

const meta: Meta<typeof BookmarkIcon> = {
  component: BookmarkIcon,
};

export default meta;
type Story = StoryObj<typeof BookmarkIcon>;

export const Default: Story = { args: { size: 100 } };
