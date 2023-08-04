import type { Meta, StoryObj } from '@storybook/react';

import { Drag } from './Drag';

const meta: Meta<typeof Drag> = {
  component: Drag,
};

export default meta;
type Story = StoryObj<typeof Drag>;

export const Default: Story = { args: { size: 100 } };
