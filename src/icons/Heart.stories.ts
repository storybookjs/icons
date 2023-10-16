import type { Meta, StoryObj } from '@storybook/react';

import { Heart } from './Heart';

const meta: Meta<typeof Heart> = {
  component: Heart,
};

export default meta;
type Story = StoryObj<typeof Heart>;

export const Default: Story = { args: { size: 100 } };
