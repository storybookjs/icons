import type { Meta, StoryObj } from '@storybook/react';

import { BasketIcon } from './BasketIcon';

const meta: Meta<typeof BasketIcon> = {
  component: BasketIcon,
};

export default meta;
type Story = StoryObj<typeof BasketIcon>;

export const Default: Story = { args: { size: 100 } };
