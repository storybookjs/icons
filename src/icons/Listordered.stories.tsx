import type { Meta, StoryObj } from '@storybook/react';

import { Listordered } from './Listordered';

const meta: Meta<typeof Listordered> = {
  component: Listordered,
};

export default meta;
type Story = StoryObj<typeof Listordered>;

export const Default: Story = { args: { size: 100 } };
