import type { Meta, StoryObj } from '@storybook/react';

import { GithubIcon } from './GithubIcon';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
};

export default meta;
type Story = StoryObj<typeof GithubIcon>;

export const Default: Story = { args: { size: 100 } };
