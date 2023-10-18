import type { Meta, StoryObj } from '@storybook/react';

import { GraphBarIcon } from './GraphBarIcon';

const meta: Meta<typeof GraphBarIcon> = {
  component: GraphBarIcon,
};

export default meta;
type Story = StoryObj<typeof GraphBarIcon>;

export const Default: Story = { args: { size: 100 } };
