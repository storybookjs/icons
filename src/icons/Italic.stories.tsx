import type { Meta, StoryObj } from '@storybook/react';

import { Italic } from './Italic';

const meta: Meta<typeof Italic> = {
  component: Italic,
};

export default meta;
type Story = StoryObj<typeof Italic>;

export const Default: Story = { args: { size: 100 } };
