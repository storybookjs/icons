import type { Meta, StoryObj } from '@storybook/react';

import { Thumbsup } from './Thumbsup';

const meta: Meta<typeof Thumbsup> = {
  component: Thumbsup,
};

export default meta;
type Story = StoryObj<typeof Thumbsup>;

export const Default: Story = { args: { size: 14 } };
