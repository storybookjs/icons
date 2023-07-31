import type { Meta, StoryObj } from '@storybook/react';

import { Flag } from './Flag';

const meta: Meta<typeof Flag> = {
  component: Flag,
};

export default meta;
type Story = StoryObj<typeof Flag>;

export const Default: Story = { args: { size: 100 } };
