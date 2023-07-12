import type { Meta, StoryObj } from '@storybook/react';

import { Menureverse } from './Menureverse';

const meta: Meta<typeof Menureverse> = {
  component: Menureverse,
};

export default meta;
type Story = StoryObj<typeof Menureverse>;

export const Default: Story = { args: { size: 14 } };
