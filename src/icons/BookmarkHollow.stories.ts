import type { Meta, StoryObj } from '@storybook/react';

import { BookmarkHollow } from './BookmarkHollow';

const meta: Meta<typeof BookmarkHollow> = {
  component: BookmarkHollow,
};

export default meta;
type Story = StoryObj<typeof BookmarkHollow>;

export const Default: Story = { args: { size: 100 } };
