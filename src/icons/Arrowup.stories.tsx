import type { Meta, StoryObj } from '@storybook/react';

import { Arrowup } from './Arrowup';

const meta: Meta<typeof Arrowup> = {
  component: Arrowup,
};

export default meta;
type Story = StoryObj<typeof Arrowup>;

export const Default: Story = { args: { size: 14 } };
