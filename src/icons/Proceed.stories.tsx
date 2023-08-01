import type { Meta, StoryObj } from '@storybook/react';

import { Proceed } from './Proceed';

const meta: Meta<typeof Proceed> = {
  component: Proceed,
};

export default meta;
type Story = StoryObj<typeof Proceed>;

export const Default: Story = { args: { size: 100 } };
