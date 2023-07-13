import type { Meta, StoryObj } from '@storybook/react';

import { Wrench } from './Wrench';

const meta: Meta<typeof Wrench> = {
  component: Wrench,
};

export default meta;
type Story = StoryObj<typeof Wrench>;

export const Default: Story = { args: { size: 100 } };
