import type { Meta, StoryObj } from '@storybook/react';

import { CPU } from './CPU';

const meta: Meta<typeof CPU> = {
  component: CPU,
};

export default meta;
type Story = StoryObj<typeof CPU>;

export const Default: Story = { args: { size: 100 } };
