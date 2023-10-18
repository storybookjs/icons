import type { Meta, StoryObj } from '@storybook/react';

import { RepoIcon } from './RepoIcon';

const meta: Meta<typeof RepoIcon> = {
  component: RepoIcon,
};

export default meta;
type Story = StoryObj<typeof RepoIcon>;

export const Default: Story = { args: { size: 100 } };
