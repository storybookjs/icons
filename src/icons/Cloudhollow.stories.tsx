import type { Meta, StoryObj } from '@storybook/react';

import { Cloudhollow } from './Cloudhollow';

const meta: Meta<typeof Cloudhollow> = {
  component: Cloudhollow,
};

export default meta;
type Story = StoryObj<typeof Cloudhollow>;

export const Default: Story = { args: { size: 100 } };
