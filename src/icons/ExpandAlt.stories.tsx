import type { Meta, StoryObj } from '@storybook/react';

import { ExpandAlt } from './ExpandAlt';

const meta: Meta<typeof ExpandAlt> = {
  component: ExpandAlt,
};

export default meta;
type Story = StoryObj<typeof ExpandAlt>;

export const Default: Story = { args: { size: 100 } };
