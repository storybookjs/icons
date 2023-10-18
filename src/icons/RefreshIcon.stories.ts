import type { Meta, StoryObj } from '@storybook/react';

import { RefreshIcon } from './RefreshIcon';

const meta: Meta<typeof RefreshIcon> = {
  component: RefreshIcon,
};

export default meta;
type Story = StoryObj<typeof RefreshIcon>;

export const Default: Story = { args: { size: 100 } };
