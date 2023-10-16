import type { Meta, StoryObj } from '@storybook/react';

import { Comments } from './Comments';

const meta: Meta<typeof Comments> = {
  component: Comments,
};

export default meta;
type Story = StoryObj<typeof Comments>;

export const Default: Story = { args: { size: 100 } };
