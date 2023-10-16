import type { Meta, StoryObj } from '@storybook/react';

import { Circle } from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Default: Story = { args: { size: 100 } };
