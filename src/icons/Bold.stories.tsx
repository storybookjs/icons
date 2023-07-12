import type { Meta, StoryObj } from '@storybook/react';

import { Bold } from './Bold';

const meta: Meta<typeof Bold> = {
  component: Bold,
};

export default meta;
type Story = StoryObj<typeof Bold>;

export const Default: Story = { args: { size: 100 } };
