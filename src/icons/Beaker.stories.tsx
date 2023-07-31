import type { Meta, StoryObj } from '@storybook/react';

import { Beaker } from './Beaker';

const meta: Meta<typeof Beaker> = {
  component: Beaker,
};

export default meta;
type Story = StoryObj<typeof Beaker>;

export const Default: Story = { args: { size: 100 } };
