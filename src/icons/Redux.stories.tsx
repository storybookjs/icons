import type { Meta, StoryObj } from '@storybook/react';

import { Redux } from './Redux';

const meta: Meta<typeof Redux> = {
  component: Redux,
};

export default meta;
type Story = StoryObj<typeof Redux>;

export const Default: Story = { args: { size: 14 } };
