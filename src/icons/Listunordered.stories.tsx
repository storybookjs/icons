import type { Meta, StoryObj } from '@storybook/react';

import { Listunordered } from './Listunordered';

const meta: Meta<typeof Listunordered> = {
  component: Listunordered,
};

export default meta;
type Story = StoryObj<typeof Listunordered>;

export const Default: Story = { args: { size: 100 } };
