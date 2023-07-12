import type { Meta, StoryObj } from '@storybook/react';

import { Changed } from './Changed';

const meta: Meta<typeof Changed> = {
  component: Changed,
};

export default meta;
type Story = StoryObj<typeof Changed>;

export const Default: Story = { args: { size: 14 } };
