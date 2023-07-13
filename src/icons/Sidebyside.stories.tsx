import type { Meta, StoryObj } from '@storybook/react';

import { Sidebyside } from './Sidebyside';

const meta: Meta<typeof Sidebyside> = {
  component: Sidebyside,
};

export default meta;
type Story = StoryObj<typeof Sidebyside>;

export const Default: Story = { args: { size: 100 } };
