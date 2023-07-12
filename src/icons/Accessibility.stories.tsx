import type { Meta, StoryObj } from '@storybook/react';

import { Accessibility } from './Accessibility';

const meta: Meta<typeof Accessibility> = {
  component: Accessibility,
};

export default meta;
type Story = StoryObj<typeof Accessibility>;

export const Default: Story = { args: { size: 14 } };
