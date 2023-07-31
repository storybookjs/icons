import type { Meta, StoryObj } from '@storybook/react';

import { Camera } from './Camera';

const meta: Meta<typeof Camera> = {
  component: Camera,
};

export default meta;
type Story = StoryObj<typeof Camera>;

export const Default: Story = { args: { size: 100 } };
