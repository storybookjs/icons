import type { Meta, StoryObj } from '@storybook/react';

import { DiamondIcon } from './DiamondIcon';

const meta: Meta<typeof DiamondIcon> = {
  component: DiamondIcon,
};

export default meta;
type Story = StoryObj<typeof DiamondIcon>;

export const Default: Story = { args: { size: 100 } };
