import type { Meta, StoryObj } from '@storybook/react';

import { Linkbroken } from './Linkbroken';

const meta: Meta<typeof Linkbroken> = {
  component: Linkbroken,
};

export default meta;
type Story = StoryObj<typeof Linkbroken>;

export const Default: Story = { args: { size: 14 } };
