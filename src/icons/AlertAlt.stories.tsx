import type { Meta, StoryObj } from '@storybook/react';

import { AlertAlt } from './AlertAlt';

const meta: Meta<typeof AlertAlt> = {
  component: AlertAlt,
};

export default meta;
type Story = StoryObj<typeof AlertAlt>;

export const Default: Story = { args: { size: 100 } };
