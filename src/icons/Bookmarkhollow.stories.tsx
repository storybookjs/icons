import type { Meta, StoryObj } from '@storybook/react';

import { Bookmarkhollow } from './Bookmarkhollow';

const meta: Meta<typeof Bookmarkhollow> = {
  component: Bookmarkhollow,
};

export default meta;
type Story = StoryObj<typeof Bookmarkhollow>;

export const Default: Story = { args: { size: 100 } };
