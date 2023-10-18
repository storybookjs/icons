import type { Meta, StoryObj } from '@storybook/react';

import { ChatIcon } from './ChatIcon';

const meta: Meta<typeof ChatIcon> = {
  component: ChatIcon,
};

export default meta;
type Story = StoryObj<typeof ChatIcon>;

export const Default: Story = { args: { size: 100 } };
