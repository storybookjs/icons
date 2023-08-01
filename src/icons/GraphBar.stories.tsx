import type { Meta, StoryObj } from '@storybook/react';

import { GraphBar } from './GraphBar';

const meta: Meta<typeof GraphBar> = {
  component: GraphBar,
};

export default meta;
type Story = StoryObj<typeof GraphBar>;

export const Default: Story = { args: { size: 100 } };
