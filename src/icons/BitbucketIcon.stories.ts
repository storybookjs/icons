import type { Meta, StoryObj } from '@storybook/react';

import { BitbucketIcon } from './BitbucketIcon';

const meta: Meta<typeof BitbucketIcon> = {
  component: BitbucketIcon,
};

export default meta;
type Story = StoryObj<typeof BitbucketIcon>;

export const Default: Story = { args: { size: 100 } };
