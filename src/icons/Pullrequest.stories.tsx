import type { Meta, StoryObj } from '@storybook/react';

import { PullRequest } from './PullRequest';

const meta: Meta<typeof PullRequest> = {
  component: PullRequest,
};

export default meta;
type Story = StoryObj<typeof PullRequest>;

export const Default: Story = { args: { size: 100 } };
