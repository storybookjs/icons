import type { Meta, StoryObj } from '@storybook/react';

import { GraphLine } from './GraphLine';

const meta: Meta<typeof GraphLine> = {
  component: GraphLine,
};

export default meta;
type Story = StoryObj<typeof GraphLine>;

export const Default: Story = { args: { size: 100 } };
