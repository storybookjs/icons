import type { Meta, StoryObj } from '@storybook/react';

import { Apple } from './Apple';

const meta: Meta<typeof Apple> = {
  component: Apple,
};

export default meta;
type Story = StoryObj<typeof Apple>;

export const Default: Story = { args: { size: 100 } };
