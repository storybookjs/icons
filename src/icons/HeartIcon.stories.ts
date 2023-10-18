import type { Meta, StoryObj } from '@storybook/react';

import { HeartIcon } from './HeartIcon';

const meta: Meta<typeof HeartIcon> = {
  component: HeartIcon,
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const Default: Story = { args: { size: 100 } };
