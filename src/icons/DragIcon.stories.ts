import type { Meta, StoryObj } from '@storybook/react';

import { DragIcon } from './DragIcon';

const meta: Meta<typeof DragIcon> = {
  component: DragIcon,
};

export default meta;
type Story = StoryObj<typeof DragIcon>;

export const Default: Story = { args: { size: 100 } };
