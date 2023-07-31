import type { Meta, StoryObj } from '@storybook/react';

import { Pointerhand } from './Pointerhand';

const meta: Meta<typeof Pointerhand> = {
  component: Pointerhand,
};

export default meta;
type Story = StoryObj<typeof Pointerhand>;

export const Default: Story = { args: { size: 100 } };
