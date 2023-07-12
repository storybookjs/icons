import type { Meta, StoryObj } from '@storybook/react';

import { Book } from './Book';

const meta: Meta<typeof Book> = {
  component: Book,
};

export default meta;
type Story = StoryObj<typeof Book>;

export const Default: Story = { args: { size: 14 } };
