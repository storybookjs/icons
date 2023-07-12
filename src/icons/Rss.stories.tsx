import type { Meta, StoryObj } from '@storybook/react';

import { Rss } from './Rss';

const meta: Meta<typeof Rss> = {
  component: Rss,
};

export default meta;
type Story = StoryObj<typeof Rss>;

export const Default: Story = { args: { size: 14 } };
