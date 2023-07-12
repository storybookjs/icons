import type { Meta, StoryObj } from '@storybook/react';

import { Transfer } from './Transfer';

const meta: Meta<typeof Transfer> = {
  component: Transfer,
};

export default meta;
type Story = StoryObj<typeof Transfer>;

export const Default: Story = { args: { size: 14 } };
