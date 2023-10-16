import type { Meta, StoryObj } from '@storybook/react';

import { StopAlt } from './StopAlt';

const meta: Meta<typeof StopAlt> = {
  component: StopAlt,
};

export default meta;
type Story = StoryObj<typeof StopAlt>;

export const Default: Story = { args: { size: 100 } };
