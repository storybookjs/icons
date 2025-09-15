import type { Meta, StoryObj } from '@storybook/react-vite';

import { BookmarkHollowIcon } from './BookmarkHollowIcon';

const meta: Meta<typeof BookmarkHollowIcon> = {
  component: BookmarkHollowIcon,
};

export default meta;
type Story = StoryObj<typeof BookmarkHollowIcon>;

export const Default: Story = { args: { size: 100 } };
