import type { Meta, StoryObj } from '@storybook/react';

import { Arrowdown } from './Arrowdown';

const meta: Meta<typeof Arrowdown> = {
  component: Arrowdown,
};

export default meta;
type Story = StoryObj<typeof Arrowdown>;

export const Default: Story = { args: { size: 14 } };
