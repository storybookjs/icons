import type { Meta, StoryObj } from '@storybook/react';

import { Figma } from './Figma';

const meta: Meta<typeof Figma> = {
  component: Figma,
};

export default meta;
type Story = StoryObj<typeof Figma>;

export const Default: Story = { args: { size: 100 } };
