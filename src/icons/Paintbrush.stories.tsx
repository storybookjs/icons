import type { Meta, StoryObj } from '@storybook/react';

import { Paintbrush } from './Paintbrush';

const meta: Meta<typeof Paintbrush> = {
  component: Paintbrush,
};

export default meta;
type Story = StoryObj<typeof Paintbrush>;

export const Default: Story = { args: { size: 14 } };
