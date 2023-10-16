import type { Meta, StoryObj } from '@storybook/react';

import { GridAlt } from './GridAlt';

const meta: Meta<typeof GridAlt> = {
  component: GridAlt,
};

export default meta;
type Story = StoryObj<typeof GridAlt>;

export const Default: Story = { args: { size: 100 } };
