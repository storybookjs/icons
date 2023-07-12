import type { Meta, StoryObj } from '@storybook/react';

import { Basket } from './Basket';

const meta: Meta<typeof Basket> = {
  component: Basket,
};

export default meta;
type Story = StoryObj<typeof Basket>;

export const Default: Story = { args: { size: 14 } };
