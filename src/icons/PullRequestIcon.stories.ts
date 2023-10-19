import type { Meta, StoryObj } from '@storybook/react';

import { PullRequestIcon } from './PullRequestIcon';

const meta: Meta<typeof PullRequestIcon> = {
  component: PullRequestIcon,
};

export default meta;
type Story = StoryObj<typeof PullRequestIcon>;

export const Default: Story = { args: { size: 100 } };
