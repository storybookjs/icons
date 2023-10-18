import type { Meta, StoryObj } from '@storybook/react';

import { UndoIcon } from './UndoIcon';

const meta: Meta<typeof UndoIcon> = {
  component: UndoIcon,
};

export default meta;
type Story = StoryObj<typeof UndoIcon>;

export const Default: Story = { args: { size: 100 } };
