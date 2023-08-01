import type { Meta, StoryObj } from '@storybook/react';

import { Bitbucket } from './Bitbucket';

const meta: Meta<typeof Bitbucket> = {
  component: Bitbucket,
};

export default meta;
type Story = StoryObj<typeof Bitbucket>;

export const Default: Story = { args: { size: 100 } };
