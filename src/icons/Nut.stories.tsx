import type { Meta, StoryObj } from '@storybook/react';

import { Nut } from './Nut';

const meta: Meta<typeof Nut> = {
  component: Nut,
};

export default meta;
type Story = StoryObj<typeof Nut>;

export const Default: Story = { args: { size: 14 } };
