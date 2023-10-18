import type { Meta, StoryObj } from '@storybook/react';

import { DirectionIcon } from './DirectionIcon';

const meta: Meta<typeof DirectionIcon> = {
  component: DirectionIcon,
};

export default meta;
type Story = StoryObj<typeof DirectionIcon>;

export const Default: Story = { args: { size: 100 } };
