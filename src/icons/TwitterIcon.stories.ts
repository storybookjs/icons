import type { Meta, StoryObj } from '@storybook/react';

import { TwitterIcon } from './TwitterIcon';

const meta: Meta<typeof TwitterIcon> = {
  component: TwitterIcon,
};

export default meta;
type Story = StoryObj<typeof TwitterIcon>;

export const Default: Story = { args: { size: 100 } };
