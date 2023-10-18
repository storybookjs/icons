import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

const meta: Meta<typeof SearchIcon> = {
  component: SearchIcon,
};

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = { args: { size: 100 } };
