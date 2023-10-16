import type { Meta, StoryObj } from '@storybook/react';

import { Bookmark } from './Bookmark';

const meta: Meta<typeof Bookmark> = {
  component: Bookmark,
};

export default meta;
type Story = StoryObj<typeof Bookmark>;

export const Default: Story = { args: { size: 100 } };
