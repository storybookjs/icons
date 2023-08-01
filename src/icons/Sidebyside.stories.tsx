import type { Meta, StoryObj } from '@storybook/react';

import { SideBySide } from './SideBySide';

const meta: Meta<typeof SideBySide> = {
  component: SideBySide,
};

export default meta;
type Story = StoryObj<typeof SideBySide>;

export const Default: Story = { args: { size: 100 } };
