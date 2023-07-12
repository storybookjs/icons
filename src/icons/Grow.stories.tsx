import type { Meta, StoryObj } from '@storybook/react';

import { Grow } from './Grow';

const meta: Meta<typeof Grow> = {
  component: Grow,
};

export default meta;
type Story = StoryObj<typeof Grow>;

export const Default: Story = { args: { size: 100 } };
