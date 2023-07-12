import type { Meta, StoryObj } from '@storybook/react';

import { Docchart } from './Docchart';

const meta: Meta<typeof Docchart> = {
  component: Docchart,
};

export default meta;
type Story = StoryObj<typeof Docchart>;

export const Default: Story = { args: { size: 14 } };
